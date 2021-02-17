class Question {
    constructor(){
      this.input1 = createInput("Name");
      this.input2 = createInput("Correct Option Number");
      this.button = createButton('Submit');
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
    }
    hide(){
      this.input2.hide();
      this.button.hide();
      this.input1.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350,0);
      this.question.html("");
      this.question.position(150,80);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }
    
  
    