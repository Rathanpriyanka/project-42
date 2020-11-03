const Bodies = Matter.Bodies;
var umbrella;
var o1,o2,o3,o4;
var thunder;
function preload(){
    thunder = loadImage("thunderbolt/1.png,2.png,3.png,4.png");
}

function setup(){
   createCanvas(400,400);

   umbrella = new Umbrella(200,190,20,20)
    
}

function draw(){
    background("black");
    //umbrella.display();

drawSprites();

}   

function Thunder () {
    if(frameCount%70==0) {
        var thunder = createSprite(200,400,20,20);
        var r= Math.round(random(1,6));
        switch(r){
         case 1 : thunder.addImage(o1);
          break;
         case 2 : thunder.addImage(o2);
            break;
         case 3 : thunder.addImage(o3);
            break;
         case 4 : thunder.addImage(o4);
          
          default:break;
        }   


}

 }