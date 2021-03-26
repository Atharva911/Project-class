var garden 
var cat1,cat2,cat3,cat4
var mouse1,mouse2,mouse3,mouse4 
var cat,mouse

function preload() {
  garden=loadImage(
      "images/garden.png"
  )
 cat1=loadImage(
     "images/cat1.png"
     )

 cat2=loadImage(
     "images/cat2.png","images/cat3.png"
 )
 
 

 cat4=loadImage(
     "images/cat4.png"
 )
     

     mouse1=loadImage(
         "images/mouse1.png"
     )

     mouse2=loadImage(
         "images/mouse2.png"
     )

     mouse3=loadImage(
         "images/mouse3.png"
     )

     mouse4=loadImage(
         "images/mouse4.png"
     )

 
  



  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  
    cat=createSprite(800,600,50,50);
   cat.addAnimation("sleepingCat",cat1)
   cat.scale=0.1

    mouse=createSprite(100,600,50,50);
    mouse.addAnimation("standingone",mouse2)
    mouse.scale=0.1;





}

function draw() {
    background(garden);
    //Write condition here to evalute if tom and jerry collide
   
    
   if(cat.x-mouse.x<cat.width/2-mouse.width/2){
       cat.addAnimation("happycat",cat4);
       cat.changeAnimation("happycat");
       mouse.addAnimation("inspection",mouse4)
       mouse.changeAnimation("inspection");

   }







    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-2;
    cat.addAnimation("catrunning",cat2);
    cat.changeAnimation("catrunning")
    mouse.addAnimation("teasing",mouse3);
    mouse.changeAnimation("teasing")
        
   
  }
  
  if(keyCode===RIGHT_ARROW){
     cat.velocityX=2;
  }


}
