var thingy=[]
var score=0
function setup(){
  createCanvas(500,500)
  for(var i=0;i<2;i++){
    thingy[i]=new thing()
  }
  colorMode(HSB)
  cake=loadImage("cake.jpg")
  mike=loadImage("mike.png")
  imageMode(CENTER);
}

function draw(){
  // y2 - y1 ^2 + x2 - z1 ^2
  background(255)
  checkOverlap();
  for(var i=0;i<2;i++){
    thingy[i].move()

    fill(200,255,255)
    thingy[i].display()
    ellipse(thingy[i].x,thingy[i].y,10,10)

  }


}
function thing(){
  this.x=random(500);
  this.y=random(500);
  this.xspeed=0;
  this.yspeed=0;
  this.timer = 0;
  this.startTimer = false;

  this.move = function(){
    this.x= this.x +this.xspeed*5
    this.y= this.y + this.yspeed*5

    this.x = constrain(this.x,0,width-10)
    this.y = constrain(this.y,0,height-10)
    if(keyIsDown(16)){
      //   this.startTimer = true
      // }
      // else if(this.startTimer == true){
      //   this.timer++;
      //   if(this.timer > 10000){
      //     this.timer = 0
      //     this.startTimer=false
      //   }
      // else if(this.timer==true){
      thingy[1].x= thingy[1].x +thingy[1].xspeed*7
      thingy[1].y= thingy[1].y + thingy[1].yspeed*7}
    }

    // }
    // }
    this.display = function() {

      image(cake,thingy[0].x,thingy[0].y,35,35)
      image(mike,thingy[1].x, thingy[1].y,70,70)
    }
    this.dir = function(x,y){
      this.xspeed=x
      this.yspeed=y
    }
  }

  function keyPressed (){
    if(keyCode === UP_ARROW){
      thingy[1].dir(0,-1)
    }
    else if(keyCode === DOWN_ARROW){
      thingy[1].dir (0,1)
    }
    else if(keyCode === RIGHT_ARROW){
      thingy[1]. dir (1,0)
    }
    else if(keyCode === LEFT_ARROW){
      thingy[1].dir(-1,0)
    }
    else if(keyIsDown(87)){
      thingy[0].dir(0,-1.1)
    }
    else if(keyIsDown(83)){
      thingy[0].dir (0,1.1)
    }
    else if(keyIsDown(68)){
      thingy[0]. dir (1.1,0)
    }
    else if(keyIsDown(65)){
      thingy[0].dir(-1.1,0)
    }
  }

  function checkOverlap(){
    var ys = thingy[0].y-thingy[1].y;
    var xs = thingy[0].x-thingy[1].x
    var  d= sqrt(ys * ys - xs * xs);

    for(var i=0; i<2; i++){
      if(d<10){

        fill(0)
        text("Game over",250,250,100,100)
        score +=.5
        thingy[i].x=random(500)
        thingy[i].y=random(500)
        thingy[i].xspeed=0
        thingy[i].yspeed=0
      }
      text(score,250,50,100,100)
    }
  }
