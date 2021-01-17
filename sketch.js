var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var welcomeImage;
var playImage;
// gameState - 0 (wait state)   
//gameState -1 (play state)
//gameState -2 (end)
//gameState -"welcome" (welcome state)

function preload(){
welcomeImage = loadImage("images/ground.png"); 
playImage = loadImage("images/Jungle.jpg");
}

function setup(){
  canvas = createCanvas(2000,1000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(welcomeImage);
  textSize(30);
  fill("black");
  stroke("black");
  strokeWeight(2);
  text("Hello,     \n Ones upon a time there was a big Jungle",1000,300);
  if(playerCount === 4){
  game.update(1);
  }
  if(gameState === 1){
    clear();    
    game.play();
  }
} 