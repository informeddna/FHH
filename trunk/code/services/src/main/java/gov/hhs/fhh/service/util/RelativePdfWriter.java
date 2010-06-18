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
package gov.hhs.fhh.service.util;

import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeReport;
import gov.hhs.fhh.model.mfhp.LivingStatus;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringEscapeUtils;
import org.apache.log4j.Logger;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.lowagie.text.BadElementException;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.Image;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

/**
 * @author lpower
 * 
 */
@SuppressWarnings({ "PMD.CyclomaticComplexity" })
public class RelativePdfWriter {
    private static final Logger LOG = Logger.getLogger(RelativePdfWriter.class);
    private final TextGetter txtGetter;

    /**
     * The required text getter to lookup messages by key from resource bundles.
     * 
     * @param txtGetter the implementation for message lookup
     */
    public RelativePdfWriter(TextGetter txtGetter) {
        this.txtGetter = txtGetter;
    }

    /**
     * 
     */
    private static final int HEAD_FONTSIZE = 12;

    /**
     * 
     */
    private static final int TEXT_FONTSIZE = 9;

    private boolean highlight = false;

    /**
     * @return the highlight
     */
    public boolean isHighlight() {
        return highlight;
    }

    /**
     * @param highlight the isHighlight to set
     */
    public void setHighlight(boolean highlight) {
        this.highlight = highlight;
    }

    /**
     * Generates a PDF file.
     * 
     * @param p PdfDataContainer with the required information to create the pdf
     * @param showPersonalInfo whether or not personal info should be shown
     * @return byte array of PDF
     */
    @SuppressWarnings("PMD.ExcessiveMethodLength")
    public byte[] makeRelativePdf(PdfDataContainer p, boolean showPersonalInfo) {

        Document document = new Document(PageSize.LETTER.rotate());
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        try {
            RelativeDraw self = p.getRelativeDraw();
            if (self.getHighlightDisease() != null) {
                setHighlight(true);
            }
            PdfWriter.getInstance(document, baos);

            document.open();

            addMetaInformation(document);

            // add pedigree diagram
            Paragraph diagramH2 = new Paragraph(getTxtGetter().getText("fhh.title") + "-"
                    + getTxtGetter().getText("report.diagram.head"), 
                    new Font(Font.HELVETICA, HEAD_FONTSIZE, Font.BOLD));
            document.add(diagramH2);
            Paragraph myDate = getPara(getTxtGetter().getText("report.date") + ": " + getFormattedDate());
            document.add(myDate);
            Image png = Image.getInstance(self.organizeFamilyTree(self));
            png.setAlignment(Image.MIDDLE);
            // CHECKSTYLE:OFF magic numbers for page width/height (10.5, 7.5) in px
            png.scaleToFit(756, 540);
            // CHECKSTYLE:ON
            document.add(png);

            document.add(makeLegendChart(p.getLegendList()));
            document.newPage();
            getChartHeader(document, p, showPersonalInfo);
            document.add(makeFamilyHistoryChart(p));

        } catch (Exception e) {
            LOG.error("Failure generating PDF", e);
        }

        document.close();
        return baos.toByteArray();

    }

    /**
     * @return string of today's date
     */
    @SuppressWarnings("PMD.SimpleDateFormatNeedsLocale")
    private String getFormattedDate() {
        Date todaysDate = new java.util.Date();
        DateFormat formatter = DateFormat.getDateTimeInstance(DateFormat.FULL, DateFormat.SHORT, getTxtGetter()
                .getLocale());
        return formatter.format(todaysDate);
    }

    /**
     * @param document
     */
    private void addMetaInformation(Document document) {
        document.addTitle("Family Health History - Output from the U.S. Surgeon General's Tool");
        document.addSubject("Output from https://familyhistory.hhs.gov/.");
        document.addKeywords("family health history, health, family tree, disease prevention");
        document.addCreator("US Department of Health and Human Services/5AM Solutions/iText");
    }

    /**
     * @param document to which the header is added returns header for chart
     * @param p the container from which to get the personal info if it is to be shown
     * @param showPersonalInfo whether or not personal info should be shown
     * @throws DocumentException
     */
    @SuppressWarnings("PMD.AvoidDeeplyNestedIfStmts")
    private Document getChartHeader(Document document, PdfDataContainer p, boolean showPersonalInfo) 
                                                                            throws DocumentException {

        Paragraph myPhrase = new Paragraph(getTxtGetter().getText("fhh.title") + "-"
                + getTxtGetter().getText("report.chart.head"), new Font(Font.HELVETICA, HEAD_FONTSIZE, Font.BOLD));
        document.add(myPhrase);
        Paragraph myDate = getPara(getTxtGetter().getText("report.date") + ": " + getFormattedDate());
        document.add(myDate);
        
        if (showPersonalInfo) {
            myPhrase = getPara(getTxtGetter().getText("person.age") + ": " + p.getRelativeDraw().getMyAge());
            document.add(myPhrase);

            if (p.getRelativeDraw().getHeight() != null) {
                StringBuilder heightText = new StringBuilder(getTxtGetter().getText("person.height") + ": ");
                if (p.getRelativeDraw().getHeight().getValue() != null) {
                    heightText.append(p.getRelativeDraw().getHeight().getValue() + " "
                            + getTxtGetter().getText(p.getRelativeDraw().getHeight().getUnit().getResourceKey()));
                }
                myPhrase = getPara(heightText.toString());
                document.add(myPhrase);
            }

            if (p.getRelativeDraw().getWeight() != null) {
                StringBuilder weightText = new StringBuilder(getTxtGetter().getText("person.weight") + ": ");
                if (p.getRelativeDraw().getWeight().getValue() != null) {
                    weightText.append(p.getRelativeDraw().getWeight().getValue() + " "
                            + getTxtGetter().getText(p.getRelativeDraw().getWeight().getUnit().getResourceKey()));
                }
                myPhrase = getPara(weightText.toString());
                document.add(myPhrase);
                if (p.getRelativeDraw().getHeight() != null) {
                    StringBuilder bmiText = new StringBuilder(getTxtGetter().getText("person.bmi") + ": ");
                    if (p.getRelativeDraw().getBmi() != null) {
                        bmiText.append(p.getRelativeDraw().getBmi());
                    }
                    myPhrase = getPara(bmiText.toString());
                    document.add(myPhrase);
                }
            }
        }
        
        myPhrase = getPara("* " + getTxtGetter().getText("report.unmatchedCondition.text"));
        document.add(myPhrase);
        document.add(new Paragraph(" "));
        return document;
    }

    /**
     * creates the family history chart/table.
     * 
     * @param relatives Set of RelativeReports from which to create legend.
     * @throws IOException
     * @throws MalformedURLException
     * @throws BadElementException
     */
    private PdfPTable makeLegendChart(List<Disease> legendList) throws BadElementException, IOException {
        // CHECKSTYLE:OFF magic number
        int cols = 3;
        if (isHighlight()) {
            cols = 4;
        }
        PdfPTable table = new PdfPTable(cols);

        String diagramLegendTitle = getTxtGetter().getText("report.legend.title");
        PdfPCell cell = new PdfPCell(new Paragraph(diagramLegendTitle, new Font(
                Font.HELVETICA, TEXT_FONTSIZE, Font.BOLD)));
        cell.setColspan(cols);
        table.addCell(cell);
        // CHECKTYLE: ON
        getLegendImageCells(table);

        // add diseases for all people in the chart
        for (Disease d : legendList) {
            StringBuffer name = new StringBuffer();
            name.append(d.getGeneratedAbbreviation()).append(" = ").append(
                    StringEscapeUtils.unescapeHtml(d.getReportDisplay()));
            table.addCell(getPara(name.append(" ").toString()));
        }
        // all cells in a row must be used, so add extras to complete the row
        int x = (cols - (legendList.size() % cols));
        if (cols > x) {
            for (int i = 0; i < x; i++) {
                table.addCell(" ");
            }
        }
        return table;
    }

    /**
     * @param table
     * @return table
     * @throws IOException
     * @throws MalformedURLException
     * @throws BadElementException
     */
    private PdfPTable getLegendImageCells(PdfPTable table) throws BadElementException, MalformedURLException,
            IOException {
        URL resource = RelativeDraw.class.getClassLoader().getResource("icon_male.gif");
        Image maleIcon = Image.getInstance(resource);
        maleIcon.scaleAbsolute(16, 16);
        maleIcon.setAlignment(Image.TEXTWRAP);

        URL resource2 = RelativeDraw.class.getClassLoader().getResource("icon_female.gif");
        Image femaleIcon = Image.getInstance(resource2);
        femaleIcon.scaleAbsolute(16, 16);
        femaleIcon.setAlignment(Image.TEXTWRAP);

        URL resource3 = RelativeDraw.class.getClassLoader().getResource("icon_maleFemaleHighlight.gif");
        Image mfHighlight = Image.getInstance(resource3);
        mfHighlight.scaleAbsolute(38, 16);
        mfHighlight.setAlignment(Image.TEXTWRAP);

        URL resource4 = RelativeDraw.class.getClassLoader().getResource("icon_maleFemaleDec.gif");
        Image mfDec = Image.getInstance(resource4);
        mfDec.scaleAbsolute(38, 16);
        mfDec.setAlignment(Image.TEXTWRAP);

        PdfPCell cella = new PdfPCell();
        cella.addElement(maleIcon);
        cella.addElement(getPara(getTxtGetter().getText("report.legend.male")));
        table.addCell(cella);
        PdfPCell cell2 = new PdfPCell();
        cell2.addElement(femaleIcon);
        cell2.addElement(getPara(getTxtGetter().getText("report.legend.female")));
        table.addCell(cell2);
        if (isHighlight()) {
            PdfPCell cell3 = new PdfPCell();
            cell3.addElement(mfHighlight);
            cell3.addElement(getPara(getTxtGetter().getText("report.legend.familyDisease")));
            table.addCell(cell3);
        }
        PdfPCell cell4 = new PdfPCell();
        cell4.addElement(mfDec);
        cell4.addElement(getPara(getTxtGetter().getText("report.legend.deceased")));
        table.addCell(cell4);
        return table;
    }

    /**
     * These keys are set in ViewReportAction.createIntlLegendLabels - this is too tightly coupled code
     * 
     * @param relatives Set of RelativeReports from which to create chart. creates the family history chart/table.
     * @throws BadElementException
     */
    private PdfPTable makeFamilyHistoryChart(PdfDataContainer p) throws BadElementException {
        // CHECKSTYLE:OFF magic number
        PdfPTable table = new PdfPTable(9);
        // CHECKTYLE: ON
        table.addCell("");
        Map<String, String> labels = p.getLegendLabels();
        table.addCell(getPara(labels.get("living")));
        table.addCell(getPara(labels.get("heartDisease")));
        table.addCell(getPara(labels.get("stroke")));
        table.addCell(getPara(labels.get("diabetes")));
        table.addCell(getPara(labels.get("colonCancer")));
        table.addCell(getPara(labels.get("breastCancer")));
        table.addCell(getPara(labels.get("ovarianCancer")));
        table.addCell(getPara(labels.get("additionalDiseases")));
        table.setHeaderRows(1);

        return populateFamilyHistoryChart(table, p);

    }

    /**
     * @param String of text to be formatted as Paragraph
     */
    private Paragraph getPara(String text) {
        return new Paragraph(text, new Font(Font.HELVETICA, TEXT_FONTSIZE));
    }

    /**
     * @param relatives Set of RelativeReports from which to create chart. creates the family history chart/table.
     * @throws BadElementException
     */
    @SuppressWarnings("PMD.AppendCharacterWithChar")
    private PdfPTable populateFamilyHistoryChart(PdfPTable table, PdfDataContainer p) throws BadElementException {
        RelativeDraw self = p.getRelativeDraw();
        boolean showNames = self.isShowNames();
        Map<AgeRangeEnum, String> ageRangeEnums = p.getAgeRanges();
        for (RelativeReport rel : p.getRelativeReports()) {
            StringBuffer name = new StringBuffer();
            if (showNames && rel.getName() != null) {
                name.append(rel.getName()).append(" ");
            }
            name.append("(").append(getTxtGetter().getText(rel.getCodeEnum().getResourceKey())).append(")");
            table.addCell(getPara(name.toString()));
            //LivingStatus enum should be used in mfhp model
            String i18nLivingStatusText = null;
            if (rel.getLivingStatus() != null) {
            LivingStatus livingStatus = null;
                try {
                    livingStatus = LivingStatus.getByValue(rel.getLivingStatus().toUpperCase());
                } catch (RuntimeException e) {
                    LOG.error(e);
                }
                if (livingStatus != null) {
                    i18nLivingStatusText = getTxtGetter().getText(livingStatus.getResourceKey());
                }
            }
            table.addCell(i18nLivingStatusText);
            table.addCell(handleClinicalObservation(rel, ageRangeEnums, rel.getHeartDisease()));
            table.addCell(handleClinicalObservation(rel, ageRangeEnums, rel.getStroke()));
            table.addCell(handleClinicalObservation(rel, ageRangeEnums, rel.getDiabetes()));
            table.addCell(handleClinicalObservation(rel, ageRangeEnums, rel.getColonCancer()));
            table.addCell(handleClinicalObservation(rel, ageRangeEnums, rel.getBreastCancer()));
            table.addCell(handleClinicalObservation(rel, ageRangeEnums, rel.getOvarianCancer()));
            table.addCell(handleClinicalObservation(rel, ageRangeEnums, rel.getAdditionalDiseases()));
        }
        return table;

    }

    /**
     * creates the strings to be shown for clinical observations.
     * 
     * @throws BadElementException
     */
    @SuppressWarnings("PMD.AppendCharacterWithChar")
    private PdfPCell handleClinicalObservation(Relative relative, Map<AgeRangeEnum, String> ages,
            List<ClinicalObservation> cos) throws BadElementException {
        PdfPCell c = new PdfPCell();
        for (ClinicalObservation co : cos) {
            if (co.getDisease() != null) {
                Disease d = co.getDisease();
                StringBuffer display = new StringBuffer();
                if (relative.isUnmatchedCondition() && co.isUnmatchedCondition()) {
                    display.append("* ");
                }
                display.append(StringEscapeUtils.unescapeHtml(d.getReportDisplay()));
                c.addElement(getPara(display.toString()));
                c.addElement(getPara("(" + ages.get(co.getAgeRange()) + ")"));
            }
        }

        return c;

    }

    /**
     * @return the txtGetter
     */
    public TextGetter getTxtGetter() {
        return txtGetter;
    }

}