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

  // public static void setPermissions(String dir) throws IOException,
  // InterruptedException {
  // String[] command = { "chmod", "-R", "777", dir };
  // System.out.println("setPermissions execution?" + command);
  // ProcessBuilder process = new ProcessBuilder(command);
  // Process proc = process.start();
  // proc.waitFor();
  // }
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

  public static void runShell(String dir, String url) throws IOException, InterruptedException {
    System.out.println("File to be executed" + System.getProperty("user.dir"));
    String l = System.getProperty("user.dir");
    System.out.println(l + dir);
    Process proc = Runtime.getRuntime().exec(new String[] { l + dir, url });
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
  }

  public static void downloadToLocalMachine(String videoUrl) throws IOException, InterruptedException {
    String command = "/src/main/java/com/crawlerao/aoapi/shellScript.sh";
    runShell(command, videoUrl);
  };

  public static void splitVideos(String query) throws IOException,
      InterruptedException {
    File projectDirectory = new File(System.getProperty("user.home") +
        "/Desktop/videosAo");
    System.out.println("projectDirectory: " + projectDirectory);
    String[] listFilesDir = projectDirectory.list();
    assert listFilesDir != null;
    System.out.println("LIST FILES --> " + listFilesDir);
    for (String fileName : listFilesDir) {
      System.out.println("FileName --> " + fileName + " " + listFilesDir);
      if (fileName.contains(query)) {
        runShell("/src/main/java/com/crawlerao/aoapi/shellRunSplitVideo.sh", fileName);
      }
    }
  }

}
