
#! /bin/sh
echo "----- Shell Script Running Split Video-----"
file=$1
folder=$2
echo "Run Scenedetect, Folder: ${folder} , File: ${file}"
cd
cd "Desktop/videosAo/${folder}/"
pwd
scenedetect -i "${file}" detect-adaptive split-video -c -o "splits/"


