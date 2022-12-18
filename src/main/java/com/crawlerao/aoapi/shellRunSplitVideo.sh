
#! /bin/sh
file = $1
echo "Run Scenedetect"

scenedetect -i file detect-adaptive split-video -c -o "~/Desktop/videosAo/${file}"


