var cat , catImage1 , catImage2 , catImage3 , catImage3 , catAnimation;
var gardenImage; 
var mouse , mouseImage1 , mouseImage2 , mouseImage3 , mouseImage4 , mouseAnimation;


function preload() {
    //load the images here
    gardenImage =  loadImage("garden.png");
    catImage1 =  loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", catImage1);
    tom.scale = 0.2;
    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", mouseImage1);
    jerry.scale = 0.15;

}

function draw() {

    background(gardenImage);
    


    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityx = 0;
          tom.addAnimation("catHappy",catImage3);
          tom.x =  300;
          tom.scale = 0.2;
          tom.changeAnimation("catSitting");
          jerry.addAnimation("jerrylastImage",mouseImage3)
          jerry.scale = 0.15;
          jerry.changeAnimation("jerrylastImage")

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",catImage2);
        tom.changeAnimation("tomRunning");
        jerry.addAnimation("jerryTeasing",mouseImage2);
        jerry.changeAnimation("jerryTeasing");
        jerry.frameDelay = 25;
        
       
    }




}
