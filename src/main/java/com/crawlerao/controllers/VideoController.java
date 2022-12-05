package com.crawlerao.controllers;

import java.io.IOException;
import java.util.HashMap;

import javax.net.ssl.SSLException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.crawlerao.aoapi.DownloadFile;
import com.crawlerao.aoapi.DownloadToLocalMachine;

@RestController

public class  VideoController {
  HashMap<String,String> postQuery = new HashMap<String,String>();

  @PostMapping("/videos")
  public  HashMap<String,String> getAllVideos(@RequestBody String query ) throws SSLException, IOException {
    System.out.println("query on getAllVideos --> " + query);
    postQuery = DownloadFile.VideoFetchingYouTube(query);
    return postQuery;
  }

  @PostMapping("/download")
  public void localDownloadFile( @RequestBody String query) throws IOException, InterruptedException {
    if (query.length() > 0) {
      String urlString = "http://www.youtube.com/watch?v=" + query;
      System.out.println("URL localDownloadFile --> " + urlString);
      Process p = DownloadToLocalMachine.downloadToLocalMachine(urlString);
      Thread.sleep(4000);
      if (!p.isAlive()){
        DownloadToLocalMachine.splitVideos(query);
      }
    } else {
      System.out.println("Query is empty ==> " + query);
    }

  }
}

