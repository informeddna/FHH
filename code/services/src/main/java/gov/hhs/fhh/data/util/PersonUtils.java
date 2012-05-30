/**
 *
 * Family Health History Portal
 * END USER AGREEMENT
 *
 * The U.S. Department of Health & Human Services ("HHS") hereby irrevocably
 * grants to the user a non-exclusive, royalty-free right to use, display,
 * reproduce, and distribute this Family Health History portal software
 * (the "software") and prepare, use, display, reproduce and distribute
 * derivative works thereof for any commercial or non-commercial purpose by any
 * party, subject only to the following limitations and disclaimers, which
 * are hereby acknowledged by the user.
 *
 * User agrees that it will not degrade the standards-based format of the software
 * by materially altering the program architecture or data structure in a way
 * that would render the data generated by the altered software incompatible
 * with the original software. The intention of this clause is to ensure the
 * long-term interoperability of family history information gathered by different
 * versions of the tool.
 *
 * User agrees that this END USER AGREEMENT will be provided to any party to
 * whom user distributes the software, and that it will apply to the distributee.
 *
 * User agrees that it will not use the HHS or Surgeon General logo or any HHS
 * trademarks without permission from HHS, and will not imply endorsement of
 * its product by HHS or the Surgeon General.
 *
 * THIS SOFTWARE IS PROVIDED TO USER WITH NO WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE,
 * OR THAT THE USE OF THE SOFWARE WILL NOT INFRINGE ANY PATENT, COPYRIGHT,
 * TRADEMARK OR OTHER PROPRIETARY RIGHTS.
 *
 */
package gov.hhs.fhh.data.util;

import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.util.htmimport.HTMRelationship;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.fiveamsolutions.hl7.model.mfhp.HeightUnit;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

/**
 * @author bpickeral
 *
 */
public final class PersonUtils {

    private static final String DEFAULT_DOC_PREFIX = "My_";

    /**
     * 1 inch = 2.54 centimeters.
     */
    static final double INCH_TO_CMS = 2.54;

    /**
     * Integer to multiply by when converting kilograms to pounds.
     */
    public static final double US_BMI_NUMERATOR = 703.0;

    private static final int METERS_TO_CM = 100;


    /**
     * Gets the occurrence of the relative within its relative type.  An htmName of sister2 will return 2.
     * @param htmName String to parse
     * @param code RelativeCode containing the <code>htmValue</code>
     * @return int occurrence of the relative within its relative type
     */
    public static int getParentNum(final String htmName, final RelativeCode code) {
        // Mother and father nodes don't contain a number, return 1 since they are always
        // the first relative of their relative type.
        if (RelativeCode.NMTH.equals(code) || RelativeCode.NFTH.equals(code)) {
            return 1;
        }
        return Integer.valueOf(StringUtils.substring(htmName, HTMRelationship.fromRelativeCode(code).length()));
    }

    /**
     * @param p Person to add Relative
     * @param relativeCode type of relative
     * @return new relative
     */
    public static Relative addRelative(final Person p, final RelativeCode relativeCode) {
        final Relative newRelative = new Relative();
        newRelative.setGender(relativeCode.getImpliedGender());
        newRelative.setCodeEnum(relativeCode);
        checkAndCorrectUUID(newRelative, p.getRelatives());
        p.getRelatives().add(newRelative);
        setKnownParents(p, newRelative);
        return newRelative;
    }

    /**
     * @param p Person to add Relatives
     * @param numRelatives number to add
     * @param relativeCode to set
     */
    public static void addRelatives(final Person p, final Integer numRelatives, final RelativeCode relativeCode) {
        if (numRelatives != null) {
            for (int i = 0; i < numRelatives; i++) {
                addRelative(p, relativeCode);
            }
        }
    }

    /**
     * Get unit for height and weight - need inches and lbs OR meters and kg
     *   formula for inches and lbs.
     *   BMI = (weight in lbs * 703)/(height in inches)(height in inches).
     *   BMI = (weight in kg)/(height in meters)(height in meters).
     * @param p <code>Person</code> Object used to calculate BMI
     * @return the bmi
     */
    public static String calculateBmi(final Person p) {
        double bmi;
        if (p.getHeight().getValue() != null && p.getWeight().getValue() != null) {
            if (WeightUnit.US.equals(p.getWeight().getUnit())) {
                bmi = calculateUSBmi(p);
            } else {
                bmi = calculateMetricBmi(p);
            }
            final DecimalFormat format = new DecimalFormat("0.0");
            return format.format(bmi);
        }
        return null;
    }

    static double calculateMetricBmi(final Person p) {
        return p.getWeight().getValue() / getMetricHeightSquared(p);
    }

    /**
     * Converts the Height of Centimeters and multiplies it by a power of 2.
     * @param p person
     * @return (height in m)^2
     */
     static double getMetricHeightSquared(final Person p) {
        final Integer v = p.getHeight().getValue();
        double metricHeight = v.doubleValue();
        double sqr = 0;
        if (v != null) {
            // do the conversion if the unit isn't metric
            if (HeightUnit.US.equals(p.getHeight().getUnit())) {
                metricHeight = v * INCH_TO_CMS;
            }

            sqr = Math.pow(metricHeight / METERS_TO_CM, 2.0);
        }
        return sqr;
    }

    static double calculateUSBmi(final Person p) {
        return p.getWeight().getValue() * US_BMI_NUMERATOR / getUSHeightSquared(p);
    }

    /**
     * Converts the Height of the person to inches and multiplies it by a power of 2.
     * @param p
     * @return (height in inches)^2
     */
    static double getUSHeightSquared(final Person p) {
        final Integer v = p.getHeight().getValue();
        double usHeight = v.doubleValue();
        double sqr = 0;
        if (v != null) {

            //do the conversion if the unit isn't US
            if (HeightUnit.METRIC.equals(p.getHeight().getUnit())) {
                usHeight = v / INCH_TO_CMS;
            }

            sqr = Math.pow(usHeight, 2.0);

        }
        return sqr;
    }

    /**
     * Sets the mother of a relative.
     * @param relative Relative child of mother
     * @param mother Relative to set
     */
    public static void setMother(final Relative relative, final Relative mother) {
        relative.setMother(mother);
    }

    /**
     * Sets the father of a relative.
     * @param relative Relative child of father
     * @param father Relative to set
     */
    public static void setFather(final Relative relative, final Relative father) {
        relative.setFather(father);
    }

    /**
     * Sets the parents of Aunts, Uncles, Brothers, and Sisters. Sons and dauters ids are generated before export
     *   since their parent is a Person as opposed to a Relative object.
     * @param proband central proband
     * @param relative Relative object in which parents are known (Aunt, Uncle, Brother, or Sister).
     */
    public static void setKnownParents(final Person proband, final Relative relative) {
        switch (relative.getCodeEnum()) {
        case MAUNT:
        case MUNCLE:
            PersonUtils.setMother(relative, proband.getMother().getMother());
            PersonUtils.setFather(relative, proband.getMother().getFather());
            break;
        case PAUNT:
        case PUNCLE:
            PersonUtils.setMother(relative, proband.getFather().getMother());
            PersonUtils.setFather(relative, proband.getFather().getFather());
            break;
        case NBRO:
        case NSIS:
            PersonUtils.setMother(relative, proband.getMother());
            PersonUtils.setFather(relative, proband.getFather());
            break;
        default:
        }
    }

    /**
     * Sets the mother and father of proband and probands parents.
     * @param proband Person object representing proband
     */
    public static void setImmediateRelatives(final Person proband) {
        final Map<RelativeCode, Relative> relativeMap = new HashMap<RelativeCode, Relative>();
        for (final Relative currRelative : proband.getRelatives()) {
            switch (currRelative.getCodeEnum()) {
            case NMTH:
            case NFTH:
            case MGRFTH:
            case MGRMTH:
            case PGRFTH:
            case PGRMTH:
                relativeMap.put(currRelative.getCodeEnum(), currRelative);
                break;
            default:
            }
        }
        proband.setMother(relativeMap.get(RelativeCode.NMTH));
        proband.setFather(relativeMap.get(RelativeCode.NFTH));
        proband.getMother().setMother(relativeMap.get(RelativeCode.MGRMTH));
        proband.getMother().setFather(relativeMap.get(RelativeCode.MGRFTH));
        proband.getFather().setMother(relativeMap.get(RelativeCode.PGRMTH));
        proband.getFather().setFather(relativeMap.get(RelativeCode.PGRFTH));
    }

    /**
     * Sets the parents of Siblings, Aunts and Uncles.  Immediate family member parents must be set.
     * @param proband Person object representing the proband
     */
    public static void setAllKnownParents(final Person proband) {
        for (final Relative currRelative : proband.getRelatives()) {
            setKnownParents(proband, currRelative);
        }
    }

    /**
     * Check whether the new relative has an id that is already assigned to an
     * existing relative, and if so assign a new one and check again.
     * @param newRelative - the new person to be added
     * @param relatives - the existing relatives
     */
    public static void checkAndCorrectUUID(final Relative newRelative, final List<Relative> relatives) {
        for (final Relative r : relatives) {
            if (newRelative.getUuid().equals(r.getUuid())) {
                newRelative.generateUuid();
                checkAndCorrectUUID(newRelative, relatives);
            }
        }

    }

    /**
     * Method generates file names by appending the person's name and the document name (including extension).
     * @param person - the person for which the file name will be retrieved (person'sname)
     * @param documentName to be appended
     * @return - the file name of the xml file that is returned when saveXmlDocument() is called.
     */
    public static String getFileNameForPerson(Person person, String documentName) {
        String retval = null;
        StringBuffer fileNameBuff = new StringBuffer();
        if (person != null && person.getName() != null) {
            fileNameBuff.append(person.getName()).append('_');
        } else {
            fileNameBuff.append(DEFAULT_DOC_PREFIX);
        }
        fileNameBuff.append(documentName);
        retval = fileNameBuff.toString().replaceAll(" ", "_");

        return retval;
    }


}