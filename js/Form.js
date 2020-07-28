class Form {
  constructor() {
    this.input=createInput("");
this.button=createButton("Play");
this.greeting=createElement('h3');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     player.name = this.input.value();
      player.index= playerCount;

      playerCount+=1;
      player.update(name);
      player.updateCount(playerCount);
      
     this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
  hide()
  {
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }
}
