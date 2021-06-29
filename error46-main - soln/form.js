class Form{

    constructor() {
          
        this.nameInput = createInput('Your Name');
        this.charInput = createInput('Your Character');

        this.kit1 = createButton("Choose Kit");
        this.kit2 = createButton("Choose Kit");
        this.kit3 = createButton("Choose Kit");

        this.text1 = createElement('h2');
        this.goalText = createElement('h2');

        this.kits = createElement('h2');

        this.playButton = createButton('Play');

        this.greeting = createElement('h1');

    }

    hide(){

        this.kit1.hide();
        this.kit2.hide();
        this.kit3.hide();
        this.playButton.hide();
        this.greeting.hide();
        this.kits.hide();
        this.text1.hide();
        this.goalText.hide();
        this.nameInput.hide();

    }

    display(){
        
        strokeWeight(1);
        stroke("white");
       
        this.text1.html("Please enter your name : ");
        this.text1.style('color', "white");
        this.text1.position(150, 100);
        
        this.nameInput.position(420, 125);
        this.nameInput.style('background-color', "pink");
        
        this.goalText.html("Goal : ");
        this.goalText.style('color', "white");
        this.goalText.position(150, dHeight/2 - 100);

        this.playButton.position(displayWidth/2, displayHeight-200);

        
        this.kits.html("Kits : ");
        this.kits.style('color', "white");
        this.kits.position(150, 450);

        this.kit1.position(260, 530);
        this.kit1.style('background-color', "lightgreen");

        this.kit2.position(365, 530);
        this.kit2.style('background-color', "lightgreen");

        this.kit3.position(465, 530);
        this.kit3.style('background-color', "lightgreen");

        this.kit1.mousePressed(()=>{

            player.choosenKit = "Kit1";
            player.update(player.choosenKit);

        })

        this.kit2.mousePressed(()=>{

            player.choosenKit = "Kit2";
            player.update(player.choosenKit);
        })

        this.kit3.mousePressed(()=>{

            player.choosenKit = "Kit3";
            player.update(player.choosenKit);
        })


        var firstKit = createSprite(displayWidth/5, displayHeight - 380, 50, 50);
        firstKit.addImage("kit", kit1img);
        firstKit.scale = 0.2;
        
        var secKit = createSprite(displayWidth/5 + 100, displayHeight - 380, 50, 50);
        secKit.addImage("kit", kit2img);
        secKit.scale = 0.2;
        
        var thirdKit = createSprite(displayWidth/5 + 200, displayHeight - 380, 50, 50);
        thirdKit.addImage("kit", kit3img);
        thirdKit.scale = 0.2;


        this.playButton.mousePressed(()=>{

            this.nameInput.hide();
            this.playButton.hide();
            this.kit1.hide();
            this.kit2.hide();
            this.kit3.hide();
            this.goalText.hide();
            this.text1.hide();
            this.kits.hide();
            firstKit.remove();
            secKit.remove();
            thirdKit.remove();
            
            
            player.name = this.nameInput.value();
            playerCount+=1;
            player.index = playerCount;
            player.update(player.name);
            player.updateCount(playerCount);

            
            this.kit1.mousePressed(()=>{

                player.updateKit(1);

            })

            this.kit2.mousePressed(()=>{

                player.updateKit(2);

            })

            this.kit3.mousePressed(()=>{

                player.updateKit(3);

            })
            
            this.greeting.html("Welcome " + player.name + " to Dungeon Escape !");
            this.greeting.style("color", "white");
            this.greeting.position(displayWidth/2 - 250, 30);

        })

        

    }

    

}


