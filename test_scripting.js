

_testWallpaperChangerPlugin();

var url = 'https://i1.sndcdn.com/artworks-000127760511-l5ur7k-t500x500.jpg';
sendLinkIDM(url);


function _testWallpaperChangerPlugin() {
	var folder = 'D:\\Photo\\Wallpaper\\Offical\\Animal';
	WallpaperChangerPlugin.Change(folder, WallpaperChangeMode.Random, WallpaperStyle.Fill);
}

function sendLinkIDM(url) {
	IDM.SendLink2(url, '', '', '', '', '', '', '', 0);
}



