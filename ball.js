class Ball {
    constructor(x,y,r){
       var options = {
           'restitution':0.9,
           'friction':1.3,
           'density':1.1,
       } 
       this.body = Bodies. circle(x,y,r,options);
       this.r=r;
       World.add(world,this.body);
    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        fill('red')
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}
