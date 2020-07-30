class Game {
  constructor(){}
  
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
      player.getCount();
      form = new Form()
      form.display();
    }
    car1= createSprite(100,200);
    car2= createSprite(300,200);
   car3= createSprite(500,200);
    car4= createSprite(700,200);
    cars = [car1,car2,car3,car4];
  }
  play()
  {
    form.hide();
    textSize(30);
    //no need of this
    // text("Game Start", 120,100);
    var index=0;
      var x=0;
      var y;
     // var a=0;
    Player.getPlayerInfo();
    if(allPlayers!=undefined)
    {
     // var position =130;  
      
      //console.log(allPlayers);
for(var plr in allPlayers)
{
  if(index<= 3)
  {
      index= index + 1;
//a=index-1;
     // console.log(cars[a]);
      x+=200;
      y=displayHeight-allPlayers[plr].distance
      cars[index-1].x=x;
      cars[index-1].y=y;
  }
 /* if(plr==="player"+ player.index)
  {
    fill("red");
  }
  else{
    fill("black");
    
  }*/
  //textSize(15);
 // text(allPlayers[plr].name+ " :"+ allPlayers[plr].distance,120,position);
  //position+=20;
if(index===player.index)
{
  cars[index-1].shapeColor="red";
  camera.position.x=displayWidth/2;
  camera.position.y= cars[index-1].y;
}

}
if(keyIsDown(UP_ARROW)&& player.index!=null)
{
player.dist+=10;
player.update();
}
    }
    //add drawSprites here to display sprites
    drawSprites();
  }
}
