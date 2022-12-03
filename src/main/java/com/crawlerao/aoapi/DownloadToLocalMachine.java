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

  public static void downloadToLocalMachine(String videoUrl) throws IOException, InterruptedException {
    File projectDirectory = new File(System.getProperty("user.dir"));
    String [] listFilesDir  = projectDirectory.list();
    System.out.println("projectDirectory: " + projectDirectory + " list -> " + listFilesDir);

    String pyDetector = "scenedetect --input %s detect-content list-scenes save-images -p /videos/";

    String[] commandOne = {"yt-dlp" , "--restrict-filenames", videoUrl };
    ProcessBuilder process;
    Process proc;
    System.out.println("download command --> " +  commandOne);
    process = new ProcessBuilder(commandOne);
    proc = process.start();
   customProcessBiuilder(proc);
    proc.waitFor();
    System.out.println("Downloading is DONE");
    assert listFilesDir != null;
    for (String fileName : listFilesDir ) {
      if (fileName.contains("mp4")) {
        String[] commandTwo = { "scenedetect", "--input", fileName, "detect-content", "split-video"};
        System.out.println("commandTwo --> " + commandTwo.toString());
        process = new ProcessBuilder(commandTwo);
        proc = process.start();
        customProcessBiuilder(proc);
        proc.waitFor();
        System.out.println("---- Process Done ----");
      }
    }
  }


  // public static void sceneDetect(String video){


  //   String[] command = {pyDetector};

  //   ProcessBuilder process = new ProcessBuilder(command);
  //   Process proc;

  // }




}
