package com.crawlerao.aoapi;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class DownloadToLocalMachine {

  public static void downloadToLocalMachine(String video) throws IOException, InterruptedException {

    String[] command = {"yt-dlp", video};

    ProcessBuilder process = new ProcessBuilder(command);
    Process proc;
    try
    {
      proc = process.start();
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
  }
}
