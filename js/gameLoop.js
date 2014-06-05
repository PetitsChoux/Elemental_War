function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}

var initGameLoop = function()
{	
	progress(25,$('#progressBar'));
	progress(50,$('#progressBar'));
	progress(75,$('#progressBar'));
}

var gameLoop = function()
{

}