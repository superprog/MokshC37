class Player {
  constructor(){
    this.index=null;
    this.name=null;
    this.dist=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex = "Players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.dist
    });
  }
  static getPlayerInfo()
  {
    var playerRef= database.ref('Players');
    playerRef.on("value",(data)=>
    {
      allPlayers=data.val();
    })
  }
  async start()
  {
    if(gameState===0)
    {
      player= new Player();
      var playerCountRef= await database.ref("playerCount").once("value");
      if(playerCountRef.exists())
      {
        playerCount=playerCountRef.value();
        player.getCount();
        
      }
      form= new Form();
      form.display();
      
      
    }
  }
}
