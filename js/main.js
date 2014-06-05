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
	context_background = canvas_background.getContext("2d");
	canvas_background.width = window.innerWidth;
	canvas_background.height = window.innerHeight;

	//obstacles
	var canvas_obstacles = document.getElementById("canvas_obstacles");
	context_obstacles = canvas_obstacles.getContext("2d");
	canvas_obstacles.width = 1920;
	canvas_obstacles.height = 1080;

	//players
	var canvas_players = document.getElementById("canvas_players");
	context_players = canvas_players.getContext("2d");
	canvas_players.width = 1920;
	canvas_players.height = 1080;

	//balls
	var canvas_bullets = document.getElementById("canvas_balls");
	context_bullets = canvas_balls.getContext("2d");
	context_bullets.width = 1920;
	canvas_bullets.height = 1080;

	//hud
	var canvas_hud = document.getElementById("canvas_hud");
	context_hud = canvas_hud.getContext("2d");
	canvas_hud.width = 1920;
	canvas_hud.height = 1080;

	// ====> déclaration de lien source des images
	backgroundImage.src = "img/background.png";
	dryGroundImage.src = "img/background_Dry_Ground.png"

	// ====> déclaration des objets
	//ex: object = new Object();

	run();
}

//-------------------------------------------> Déclaration des variables <-------------------------------------------//

var context_background;
var context_obstacles;
var context_players;
var context_bullets;
var context_hud;

var frame = 0;

// ====> variables images
var backgroundImage = new Image();
var dryGroundImage = new Image();

//-------------------------------------------> Fonctions Globales <-------------------------------------------//


//-------------------------------------------> Classe d'objet <-------------------------------------------//

function run()
{
	requestAnimFrame(run);
	context_background.clearRect(0, 0, canvas_background.width, canvas_background.height);
	context_obstacles.clearRect(0, 0, canvas_obstacles.width, canvas_obstacles.height);
	context_players.clearRect(0, 0, canvas_players.width, canvas_players.height);
	context_bullets.clearRect(0, 0, canvas_balls.width, canvas_balls.height);
	context_hud.clearRect(0, 0, canvas_hud.width, canvas_hud.height);
	frame++;

	// tests rendus
	background();
	//
}