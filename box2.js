class Box_2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("monster2.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      pop();
  }
  score(){
    //console.log(this.Visibility)
    if(this.Visibility<250 && this.Visibility>145){
      score++;
    }
  }
  };
  
