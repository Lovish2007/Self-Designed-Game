class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

   
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
   // player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      bg.velocityX = -6;
     // imageMode(CENTER)
      //image(playImage,displayWidth/2,displayHeight/2,displayWidth*4,displayHeight);
      bg.visible = true;
      if(bg.x<0){
        bg.x = displayWidth/4-500;
      }
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the players
      var x = 300 ;
      var y = 600;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the players a little away from each other in x direction
     
        //use data form the database to display the players in y direction
        x = allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          players[index - 1].shapeColor = "red";
         camera.position.x = players[index-1].x;
         camera.position.y = displayHeight/2;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }

    if(keyIsDown("space") && player.index !== null){
      player.createArrow();
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    /*if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }*/
    drawSprites();
  }


}