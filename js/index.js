(function(){
	var clientWidth = document.documentElement.clientWidth;
	var htmlElement = document.getElementsByTagName("html");
	var fontSize = clientWidth/640*32;
	htmlElement[0].style.fontSize  = fontSize + 'px';
})();