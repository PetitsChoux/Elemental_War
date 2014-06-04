window.requestAnimFrame =	(
	function(){
		return  window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function(callback, element){
		window.setTimeout(callback, 1000 / 60);
		};
	}
)();

window.onload = function()
{
	//background
	var canvas_background = document.getElementById("canvas_background");
	context_background = canvas.getContext("2d");
	canvas_background.width = 1920;
	canvas_background.height = 1080;

	//obstacles
	var canvas_obstacles = document.getElementById("canvas_obstacles");
	context_obstacles = canvas.getContext("2d");
	canvas_obstacles.width = 1920;
	canvas_obstacles.height = 1080;

	//players
	var canvas_players = document.getElementById("canvas_players");
	context_players = canvas.getContext("2d");
	canvas_players.width = 1920;
	canvas_players.height = 1080;

	//balls
	var canvas_balls = document.getElementById("canvas_balls");
	context_balls = canvas.getContext("2d");
	canvas_balls.width = 1920;
	canvas_balls.height = 1080;

	//hud
	var canvas_hud = document.getElementById("canvas_hud");
	context_hud = canvas.getContext("2d");
	canvas_hud.width = 1920;
	canvas_hud.height = 1080;

	// ====> déclaration de lien source des images
	// ex: background.src = "img/background.png";

	// ====> déclaration des objets
	//ex: object = new Object();

	run();
}

//-------------------------------------------> Déclaration des variables <-------------------------------------------//

var context_background;
var context_obstacles;
var context_players;
var context_balls;
var context_hud;

var frame = 0;

// ====> variables images
//ex: var background = new Image();

//-------------------------------------------> Fonctions Globales <-------------------------------------------//


//-------------------------------------------> Classe d'objet <-------------------------------------------//


function run()
{
	requestAnimFrame(run);
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	frame++;
}