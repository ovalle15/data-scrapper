#! /bin/sh
echo "Installing dependencies"
echo "--------------------------------"
echo "Installing scenedetect with pip3"
pip3 install scenedetect
echo "Installing ffmpeg with brew"
brew install ffmpeg
echo "Installing yt-dlp"
brew install yt-dlp
echo "Creating directory if doesn't exist"
mkdir -p "~/Desktop/videosAo/"

