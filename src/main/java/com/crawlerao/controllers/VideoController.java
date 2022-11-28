package com.crawlerao.controllers;

import java.io.IOException;
import java.util.HashMap;

import javax.net.ssl.SSLException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.crawlerao.aoapi.DownloadFile;

@RestController

public class  VideoController {
  HashMap<String,String> postQuery = new HashMap<String,String>();

  @PostMapping("/videos")
  public  HashMap<String,String> getAllVideos(@RequestBody String query ) throws SSLException, IOException {
    System.out.println("QUERY --> " + query);
    postQuery = DownloadFile.VideoFetchingYouTube(query);
    return postQuery;
  }
}

