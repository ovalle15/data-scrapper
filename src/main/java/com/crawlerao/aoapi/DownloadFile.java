package com.crawlerao.aoapi;
import java.io.*;
import javax.net.ssl.SSLException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.util.HashSet;
import java.util.Set;
import com.crawlerao.aoapi.ResponseContext.YouTube;


public class DownloadFile {

  public static void VideoFetching() throws IOException , SSLException {
    ResponseContext res = new ResponseContext();
    YouTube youtube = res.new YouTube();

    Set<Object> videos = new HashSet<Object>(10);

    String field = "cats+mainecoons";
    String url_P = String.format("https://www.youtube.com/results?search_query=%s", field);

    Document file = Jsoup.connect(url_P).header("User-Agent", "Chrome").get();
    Elements doc = file.body().getElementsByTag("script");

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

          videos.add(youtube.getVideoObject());
          lastIndex += 21;
        }

      }
    }
    System.out.println(videos);

  }
}
