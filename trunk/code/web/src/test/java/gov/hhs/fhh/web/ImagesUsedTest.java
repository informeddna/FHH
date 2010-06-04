package gov.hhs.fhh.web;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.junit.Test;

public class ImagesUsedTest {
    private FileGrep fgrep = new FileGrep();

    @SuppressWarnings("unchecked")
    @Test
    public void imagesAreUsed() throws Exception {
        String baseDirPath = TestProperties.getWebBaseDir() + File.separator + "src" + File.separator;
        File baseDir = new File(baseDirPath);
        String baseImgDirPath = TestProperties.getWebBaseDir() + File.separator + "src" + File.separator + "main"
                + File.separator + "webapp" + File.separator + "images";
        File baseImgDir = new File(baseImgDirPath);
        Collection<File> imgFiles = FileUtils.listFiles(baseImgDir, new String[] { "gif", "jpg", "ico" }, true);
        Collection<File> webFiles = FileUtils.listFiles(baseDir, new String[] { "jsp", "tag", "jspx", "java", "js",
                "css" }, true);
        for (File file : webFiles) {
            List<File> tmpImgFiles = new ArrayList<File>(imgFiles);
            for (File imgFile : tmpImgFiles) {
                if (fgrep.isNotExcluded(imgFile.getName())) {
                    if (fgrep.contains(file, fgrep.escape(imgFile.getName()))) {
                        imgFiles.remove(imgFile);
                    }
                } else {
                    imgFiles.remove(imgFile);
                }
            }
        }
    }

}
