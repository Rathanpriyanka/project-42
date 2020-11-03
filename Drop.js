class Drop {
constructor(x,y,radius) {
var options = {
friction :1.0

}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;

}
display() {
fill ("blue");
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
var maxDrops = 100;

for(var i =0;i<400;i++ ) {
drops.push(newCreateDrop(random(0,400)),(random(0,400)))

}

}
update(){

if(this.rain.position.y > height) {

     Matter.body.setPosition(this.rain,{x:(random(0,400)) , y: (random(0,400))});

}

}


}