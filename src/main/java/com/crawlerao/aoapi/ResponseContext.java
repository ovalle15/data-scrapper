package com.crawlerao.aoapi;
import java.util.HashMap;


public class ResponseContext {

  public HashMap<String, String> videoInfo = new HashMap<String, String>(10);

  public class YouTube {
    public String title;
    private String videoID;

    public void addTitle(String title) {
      this.title = title;
    }
    public String setVideoUrl(String videoId){
      this.videoID = videoId.replaceAll("\"", "");
      return this.videoID;
    }
    public String getVideoID() {
      return this.videoID;
    }
    public HashMap<String, String> getVideoObject() {
      videoInfo.put(this.videoID, this.title);

      return videoInfo;
    }
  }
}
