class Bob{
    constructor(x){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0.5,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, 400, 40,options);
        //this.x = x;
        //this.y = 350;
        //this.radius = 20;
        World.add(world,this.body);
    }
    display(){
       // var pos = this.body.position;
        push();
        //rectMode(CENTER);
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke(72, 58, 189);
        fill(402, 3, 127);
        ellipse(this.body.position.x, this.body.position.y, 40, 40);
        pop();
    }
}