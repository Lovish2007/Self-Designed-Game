var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var welcomeImage;
var player1Image;
var player2Image;
var player3Image;
var player4Image;
var arrowImage;
var bg;
//gameState - 0 (wait state)   
//gameState -1 (play state)
//gameState -2 (end)
//gameState -"welcome" (welcome state)

function preload(){
welcomeImage = loadImage("images/ENTRENCE.jpg"); 
playImage = loadImage("images/Jungle.jpg");

 player1Image = loadImage("images/player1.png");
 player2Image = loadImage("images/player2.png");
 player3Image = loadImage("images/queen.png");
 player4Image = loadImage("images/baby_robot.png");

 arrowImage = loadImage("images/arrow.png");
}

function setup(){
  canvas = createCanvas(2000,1000);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  bg = createSprite(displayWidth/4-500, displayHeight/2-45, displayWidth*4, displayHeight*4);
  bg.visible = false;
  bg.addImage(playImage)
  bg.scale = 2;

  player1 = createSprite(170,260);
  player1.scale = 0.5;
   player1.visible = false;
  player2 = createSprite(160,280);
  player2.scale = 0.5;
  player2.visible = false;
  player3 = createSprite(1000,100);
  player3.scate = 0.5;
  player3.visible = false;
  player4 = createSprite(1300,100);
  player4.scale = 0.5;
  player4.visible = false;
  players = [player1, player2, player3, player4];
}


function draw(){
  background(welcomeImage);
  player1.addImage(player1Image)
  player2.addImage(player2Image)
  player3.addImage(player3Image)
  player4.addImage(player4Image)
  textSize(20);
  fill("black");
  text("Hello,   \n Ones upon a time there was a big Jungle in which there was a tree house. In that tree house 2 people where living from last 20 years. \n Then eccidentli the city construction project was signed to make in that jungle by a king of the state near that jungle and he sent officers \n with a hunter for threre safty. After 3 days of inspection a villa was cons tructed and the 2  persone desided that one of them will go to \n search the villa and make the people leave from that place. Now when they saw that they kept the princess for trial of that place and \n he also saw that there was a tite security and princess was upset. now next day he went there with his brother and made princess \n leave and made the jungle safe by making the soldiersn leave .",700,400);
  text("Note, \n Arrow keys to move",50, 870);
  if(playerCount === 4){
  game.update(1);
  }
  if(gameState === 1){
    clear();   
      game.play();
      player1.visible = true;
      player2.visible = true;
      player3.visible = true;
      player4.visible = true;
  }
  drawSprites();
}

