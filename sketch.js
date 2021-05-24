//Create variables here
var dog; 
var happydog;
var database;
var foodS;
var foodStock;

function preload()
{
	//load images here
  dog = loadImage("images/image.png");
  happydog= loadImage("images/image2.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog = createSprite(250,250,20,20)
  dog.addImage(dog);
  dog.scale = 0.21;
}


function draw() {  

  drawSprites();
  //add styles here
  background(yellow)
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }

  drawSprites();

  fill("red")
  textSize(20)
  text("Press the Up arrow key to feed dog",100,150)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
   if(x<=0){
     x=0;
   }else{
     x=x-1;
   }
  database.ref('/').update({
    Food:x
  })
}

