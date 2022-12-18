#! /bin/sh
echo "----- Shell Script Running -----"
url=$1
pwd
echo "--------------------------------"
echo "Executing yt-dlp"
echo "Command: yt-dlp -P ~/Desktop/videosAo --restrict-filenames -f [ext$=mp4]"
echo "URL --> ${url}"

yt-dlp -P "~/Desktop/videosAo" --restrict-filenames -f "[ext$=mp4]" "${url}"

# /Users/aovalle/Documents/data-scrapper/target/classes/com/crawlerao/aoapi/shellScript.sh