package com.crawlerao.controllers;

import java.io.IOException;
import java.util.HashMap;

import javax.net.ssl.SSLException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crawlerao.aoapi.DownloadFile;

@RestController
public class  VideoController {
  public String query = "maru+cat";

  @GetMapping("/videos/")
  public HashMap<String,String> getAllVideos(String query ) throws SSLException, IOException {
    return DownloadFile.VideoFetchingYouTube(query);
  }
}

