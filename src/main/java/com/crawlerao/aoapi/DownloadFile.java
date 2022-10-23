package com.crawlerao.aoapi;
import java.io.*;
// import java.lang.Object;
// import org.jsoup.nodes.Node;
// import org.jsoup.nodes.Element;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class DownloadFile {
  public void VideoFetching() throws IOException {
    Document file = Jsoup.connect("https://www.youtube.com/").get();
    System.out.println("FILE-DOWNLOADED -->" + file);
  }
}
