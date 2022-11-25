package com.crawlerao.aoapi;

import java.io.IOException;

// ot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AoApiApplication {

    public static void main(String[] args) throws IOException {
    // SpringApplication.run(AoApiApplication.class, args);

    DownloadFile.VideoFetching();

    }

}
