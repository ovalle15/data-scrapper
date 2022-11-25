package com.crawlerao.aoapi;

import java.io.IOException;

// ot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.crawlerao.globals.Globals;

@SpringBootApplication
public class AoApiApplication {

    public static void main(String[] args) throws IOException {
    // SpringApplication.run(AoApiApplication.class, args);
    String query = args.length > 1 ? args[0] + "+" + args[1] : Globals.defaultQuery ;
    System.out.println(query);
    DownloadFile.VideoFetchingYouTube(query);

    }

}
