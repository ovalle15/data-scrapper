package com.crawlerao.aoapi;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;


public class DownloadToLocalMachine {

  public static Process customProcessBiuilder(Process proc) {
    try {
      BufferedReader stdInput = new BufferedReader(new
      InputStreamReader(proc.getInputStream()));

      String r = null;
      while ((r = stdInput.readLine()) != null) {
          System.out.println(r);
      }
    }
    catch (IOException e){
      System.out.print("error");
        e.printStackTrace();
    }
    return proc;
  };

  public static Process downloadToLocalMachine(String videoUrl) throws IOException, InterruptedException {
    String[] commandOne = {"yt-dlp", "-P", "~/Desktop/videosAo", "--restrict-filenames", videoUrl};
    ProcessBuilder process;
    Process proc;

    System.out.println("download command --> " +  commandOne);
    process = new ProcessBuilder(commandOne);
    proc = process.start();
   customProcessBiuilder(proc);
    proc.waitFor();
    System.out.println("Downloading is DONE");
    return proc;

  }

  public static void splitVideos(String query) throws IOException, InterruptedException {
    File projectDirectory = new File(System.getProperty("user.home") + "/Desktop/videosAo");
    System.out.println("projectDirectory: " + projectDirectory);
    String [] listFilesDir  = projectDirectory.list();
    ProcessBuilder process;
    Process proc;

    assert listFilesDir != null;
    System.out.println("LIST FILES --> " + listFilesDir);
    for (String fileName : listFilesDir ) {
      System.out.println("FileName --> " + fileName + " " + listFilesDir);
      if (fileName.contains(query)) {
        System.out.println("scenedetect " + "--input "  + fileName +  " detect-content " + "split-video");
        String[] commandTwo = { "scenedetect", "--input", fileName, "detect-content", "split-video"};
        System.out.println("commandTwo --> " + commandTwo.toString());
        process = new ProcessBuilder(commandTwo);
        proc = process.start();
        customProcessBiuilder(proc);
        proc.waitFor();
        System.out.println("---- Split video Done ----");
      }
    }
  }


}
