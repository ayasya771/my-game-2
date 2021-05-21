var shrub1, shrub2, groundHoles;
var ambulanceImg,ambulance;
var player, girl, boy, girlImg, boyImg;
var timeLimit, hospital;
var canvas;
var gameState="wait";
var playbutton, playbuttonImg;
var timer=180;
var patient, patientImg;

var daytrack, nighttrack;

var track,trackImg;

function preload(){

  patientImg = loadImage("images/patient1.png");
  
  ambulanceImg = loadImage("images/ambulance1.png");

    shrub1 = loadImage("images/shrub1.jpg");
    shrub2 = loadImage("images/shrub2.jpg");
    
    girlImg = loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png",
    "images/girl4.png","images/girl5.png","images/girl6.png",
    "images/girl7.png","images/girl8.png");
    
    
    
    boyImg = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png",
    "images/boy4.png","images/boy5.png","images/boy6.png","images/boy7.png",
    "images/boy8.png","images/boy9.png","images/boy10.png","images/boy11.png","images/boy12.png");

    hospital = loadImage("images/hospital.jpg");

    playbuttonImg = loadImage("images/start.jpg");


    daytrack = loadImage("images/dayTrack.jpg");

    nighttrack = loadImage("images/nightTrack.jpg");

    trackImg  = loadImage("images/track.png");
}




function setup(){
    canvas=createCanvas(windowWidth-10,windowHeight-20);

    // creating the button for start 
    playbutton=createSprite(windowWidth/1.45,windowHeight/2,30,30);
    playbutton.addImage(playbuttonImg);

    girl=createSprite(windowWidth/4-100,windowHeight/2+50,30,30);
     girl.addAnimation("walk",girlImg);
    girl.scale = 0.3;
    
    boy=createSprite(windowWidth/4,windowHeight/2+50,30,30);
    boy.addAnimation("Walk",boyImg);
    boy.scale=1.5;
 

    player=createSprite(displayWidth/8, displayHeight/1.5, 50,50);
    player.visible = false;
    player.setCollider("rectangle",10,0, 20,80);
    //player.debug=true;

    patient=createSprite(displayWidth -150, displayHeight/1.5, 50,50);
    patient.addImage(patientImg);
   // patient.debug=true;
    patient.setCollider("rectangle",0,0, 250,60);
    patient.visible = false;

    ambulance = createSprite(displayWidth/2,displayHeight-300,100,100);
    ambulance.addImage(ambulanceImg);
    ambulance.visible = false;
    ambulance.scale = 1.8;

    track = createSprite(700,300,500,500);
    track.addImage(trackImg);
    track.scale= 3;
    track.visible = false;
     track.velocityY = 0;
    
  }
 function draw(){
     background("#f2bf32");

//Displaying the rules
     if(gameState==="wait"){
         fill("blue");
        
         textSize(30);
        text("Saving the Patient", windowWidth/2-50, 40);
        
        fill("black");
        textSize(20);
        
        text("1) Take patient to hospital via ambulance .",windowWidth/11-50,windowHeight/4);
        text("2) Avoid obstacles, traffic.",windowWidth/11-50,windowHeight/3);
        text("3) Press Arrow keys to control player",windowWidth/11-50,windowHeight/2.5);
        text("4) Choose Your Character To Play" ,windowWidth/11-50,windowHeight/2.25);

        fill("red");
        textSize(25);
        text("TIME IS LIMITED!!",windowWidth/6-60,480);
       
        if(mousePressedOver(girl)){
         player.addAnimation("walk", girlImg);
         player.scale = 0.3;
        }
        if(mousePressedOver(boy)){
         player.addAnimation("walk", boyImg);
         player.scale = 1.5;
        }
        
        if(mousePressedOver(playbutton)){
            gameState="start";
          }
     }

if(gameState==="start"){
  
  background(daytrack);
  player.visible = true;
  patient.visible=true;
  playbutton.visible=false;
  boy.visible=false;
  girl.visible=false;
  
  if(keyDown(RIGHT_ARROW)){
    player.x += 4;
  }
  if(keyDown(LEFT_ARROW)){
    player.x -= 4;
  }
  player.rotation=-10;
    textSize(16);
  fill("black")
  text("TIMER:"+Math.round(timer),windowWidth-300,50);
}

  if(player.isTouching(patient))
  {
    patient.x=2000;
    player.destroy();
    gameState= "play"
    ambulance.visible =true;
  }

if(gameState==="play"){
  //ambulance.collide(track);
  background(daytrack);
  timer=timer-0.02;
  track.velocityY = 5;
  fill("black");
  text("TIMER:"+Math.round(timer),windowWidth-300,50);
  ambulance.visible = true;
  track.visible = true;
  
  if(keyIsDown(RIGHT_ARROW)){
    ambulance.x +=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    ambulance.x -=2;
  }

  track.velocityY=2;

  if(track.y<150){
    track.y=track.Height*2;
  }
}
     drawSprites();
 }

