class Box {
    constructor(x,y,width,height) {
      var options = {
         
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle)
      fill("lime");
        rect(0,0, this.width, this.height);
        pop()
    }
  };