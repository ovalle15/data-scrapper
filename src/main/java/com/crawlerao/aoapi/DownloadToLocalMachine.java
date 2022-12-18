package com.crawlerao.aoapi;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

public class DownloadToLocalMachine {

  public static Process customProcessBuilder(Process proc) {
    try {
      BufferedReader stdInput = new BufferedReader(new InputStreamReader(proc.getInputStream()));

      String r = null;
      while ((r = stdInput.readLine()) != null) {
        System.out.println(r);
      }
    } catch (IOException e) {
      System.out.print("error");
      e.printStackTrace();
    }
    return proc;
  };

  public static void installDependencies() throws IOException, InterruptedException {
    String dir = "/src/main/java/com/crawlerao/aoapi/install.sh";
    System.out.println("File to be executed" + System.getProperty("user.dir"));
    String l = System.getProperty("user.dir");
    System.out.println(l + dir);
    Process proc = Runtime.getRuntime().exec(new String[] { l + dir });
    BufferedReader stdInput = new BufferedReader(new InputStreamReader(proc.getInputStream()));
    BufferedReader stdError = new BufferedReader(new InputStreamReader(proc.getErrorStream()));
    // Output of the command
    String r = null;
    while ((r = stdInput.readLine()) != null) {
      System.out.println(r);
    }
    while ((r = stdError.readLine()) != null) {
      System.out.println(r);
    }
    proc.waitFor();
    int e = proc.exitValue();
    System.out.println("Process exited and ended " + e);
  };

  public static void runShell(String dir, String url, String folderName) throws IOException, InterruptedException {
    String l = System.getProperty("user.dir");
    System.out.println("File to be executed --->" + l + dir + "  Folder name --> " + folderName);
    Process proc = Runtime.getRuntime().exec(new String[] { l + dir, url, folderName });
    BufferedReader stdInput = new BufferedReader(new InputStreamReader(proc.getInputStream()));
    BufferedReader stdError = new BufferedReader(new InputStreamReader(proc.getErrorStream()));
    // Line output of file contents
    String r = null;
    while ((r = stdInput.readLine()) != null) {
      System.out.println(r);
    }
    while ((r = stdError.readLine()) != null) {
      System.out.println(r);
    }
    proc.waitFor();
    int e = proc.exitValue();
    System.out.println("Process exited and ended " + e);
  }

  public static void downloadToLocalMachine(String videoUrl, String folderName)
      throws IOException, InterruptedException {
    String commandPath = "/src/main/java/com/crawlerao/aoapi/yt-dlpScript.sh";
    runShell(commandPath, videoUrl, folderName);
  };

  public static void splitVideos(String query) throws IOException,
      InterruptedException {
    File projectDirectory = new File(System.getProperty("user.home") +
        "/Desktop/videosAo/" + query + "/");
    System.out.println("projectdIRECTORY --> " + projectDirectory);
    String[] listFilesDir = projectDirectory.list();
    assert listFilesDir != null;
    System.out.println("List Files --> " + listFilesDir);
    for (String fileName : listFilesDir) {
      System.out.println("FileName --> " + fileName + " " + listFilesDir);
      if (fileName.contains(query)) {
        runShell("/src/main/java/com/crawlerao/aoapi/splitVideoScript.sh", fileName, query);
      }
    }
  }

}
