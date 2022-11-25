package com.crawlerao.aoapi;

import java.util.HashMap;

import com.crawlerao.globals.Globals;

public class ResponseContext {

  public HashMap<String, String> videoInfo = new HashMap<String, String>();

  public class YouTube {
    public String title;
    private String videoURL;

    public void addTitle(String title) {
      this.title = title;
    }
    public String setVideoUrl(String videoId){
      videoURL = Globals.queryUrl + videoId.replaceAll("\"", "");
      return videoURL;
    }
    public String getTitle() {
      return title;
    }
    public HashMap<String, String> getVideoObject() {
      videoInfo.put("videoUrl",videoURL);
      videoInfo.put("title",title);
      return videoInfo;
    }
  }
}
