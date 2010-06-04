package gov.hhs.fhh.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.CharacterCodingException;
import java.nio.charset.Charset;
import java.nio.charset.CharsetDecoder;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class FileGrep {


    private String[] excludes = new String[] { };

    public void setExcludes(String...excludes) {
        this.excludes = excludes;
        
    }
    
    public boolean isNotExcluded(String key) {
        return !isExcluded(key);
    }

    public boolean isExcluded(String key) {
        List<String> excludeKeys = Arrays.asList(excludes);
        for (String excluded : excludeKeys) {
            if (key.startsWith(excluded)) {
                return true;
            }
        }
        return false;
    }

    public String escape(String value) {
        return value.replaceAll("\\.", "\\\\.");
    }

    public boolean contains(File file, String pattern) throws FileNotFoundException, IOException,
            CharacterCodingException {
        // System.err.print(pattern);
        // Create a pattern to match comments
        Pattern p = Pattern.compile(pattern);
        // Pattern p = Pattern.compile(pattern, Pattern.MULTILINE);
        // Get a Channel for the source file
        FileInputStream fis = null;
        FileChannel fc = null;
        try {
            fis = new FileInputStream(file);
            fc = fis.getChannel();

            // Get a CharBuffer from the source file
            ByteBuffer bb = fc.map(FileChannel.MapMode.READ_ONLY, 0, (int) fc.size());
            Charset cs = Charset.forName("8859_1");
            CharsetDecoder cd = cs.newDecoder();
            CharBuffer cb = cd.decode(bb);

            // Run some matches
            Matcher m = p.matcher(cb);
            return m.find();
        } finally {
            if (fc != null) {
                fc.close();
            }
            if (fis != null) {
                fis.close();
            }
        }
    }
}
