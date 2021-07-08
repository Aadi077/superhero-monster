class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 200, 200, options);
      this.width = 200;
      this.height = 200;
      this.image = loadImage("Monster-01.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);

      fill("green");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  