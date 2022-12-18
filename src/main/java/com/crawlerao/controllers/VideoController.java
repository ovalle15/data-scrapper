package com.crawlerao.controllers;

import java.io.IOException;
import java.util.HashMap;

import javax.net.ssl.SSLException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.crawlerao.aoapi.DownloadFile;
import com.crawlerao.aoapi.DownloadToLocalMachine;

@RestController

public class VideoController {
  HashMap<String, String> postQuery = new HashMap<String, String>();

  @PostMapping("/videos")
  public HashMap<String, String> getAllVideos(@RequestBody String query)
      throws SSLException, IOException, InterruptedException {
    System.out.println("query on getAllVideos --> " + query);
    DownloadToLocalMachine.installDependencies();
    postQuery = DownloadFile.VideoFetchingYouTube(query);
    return postQuery;
  }

  @PostMapping("/download")
  public void localDownloadFile(@RequestBody String query) throws IOException, InterruptedException {
    if (query.length() > 0) {
      String urlString = "http://www.youtube.com/watch?v=" + query;
      System.out.println("URL localDownloadFile --> " + urlString);
      DownloadToLocalMachine.downloadToLocalMachine(urlString, query);

    }
  }

  @PostMapping("/split")
  public void localSplitFile(@RequestBody String query) throws IOException, InterruptedException {
    DownloadToLocalMachine.splitVideos(query);
  }

}
