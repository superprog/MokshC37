class Form {
  constructor() {
    this.input=createInput("");
this.button=createButton("Play");
this.greeting=createElement('h3');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 0);
    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     player.name = this.input.value();
      player.index= playerCount;

      playerCount+=1;
      player.update(name);
      player.updateCount(playerCount);
      
     this.greeting.html("Hello " + player.name );
      this.greeting.position(displayWidth/2-70, displayHeight/4);


    });

  }
  hide()
  {
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }
}
