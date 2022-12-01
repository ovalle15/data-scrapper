package com.crawlerao.aoapi;
import java.io.*;
import javax.net.ssl.SSLException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import com.crawlerao.aoapi.ResponseContext.YouTube;
import com.crawlerao.globals.*;


public class DownloadFile {

  public static HashMap<String, String> VideoFetchingYouTube(String query) throws IOException , SSLException {
    ResponseContext res = new ResponseContext();
    YouTube youtube = res.new YouTube();
    HashMap<String, String> videos = new HashMap<String, String>();
    String url_P = String.format(Globals.URL, query);

    Document file = Jsoup.connect(url_P).header("User-Agent", "Chrome").get();
    Elements doc = file.body().getElementsByTag(Globals.TAG);

    for (Element e : doc) {
      String data = e.data();

      if (data.contains("responseContext")) {

        int lastIndex = 0;
        int firstIndex = 0;

        while (videos.size() <= 10) {
          firstIndex = data.indexOf("\"videoId\"", lastIndex);
          if (firstIndex < 0) {
            System.out.println("Value not found for 'firstIndex'");
            break;
          }
          lastIndex = firstIndex + 23;
          String id = data.substring(firstIndex, lastIndex);
          id = id.substring(10, id.length());

          youtube.addTitle("placeholder");
          youtube.setVideoUrl(id);
          videos = youtube.getVideoObject();

          lastIndex += 21;
        }

      }
    }
    // Update title

    Iterator it = videos.entrySet().iterator();
    while (it.hasNext()) {

        Map.Entry pair = (Map.Entry) it.next();

        // System.out.println(pair.getKey() + " ==> " + pair.getValue());
        String notEnbedUrl = Globals.queryUrl + pair.getKey();
        Document page = Jsoup.connect(notEnbedUrl).header("User-Agent", "Chrome").get();

        String title  = page.title();
        System.out.println(title);
        String k = (String) pair.getKey();
        try {
        videos.put(k , title);
        } catch (Exception e) {
          System.out.println(e);
        }
    }
    System.out.println(videos);
    return videos;
  }

}
