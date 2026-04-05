#!bash
DOWNLOAD_TO_MUSIC_DIR="/home/$USER/Music/YT/"

if [ -d $DOWNLOAD_TO_MUSIC_DIR ]; then
	cd $DOWNLOAD_TO_MUSIC_DIR && yt-dlp --download-archive archive.txt --embed-metadata -x --cookies-from-browser firefox --audio-format mp3 https://youtube.com/playlist\?list\=LM

	exit 0
fi

echo "Please create $DOWNLOAD_TO_MUSIC_DIR first, or change the script!"

exit 1
