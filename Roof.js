class Roof {
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(600, 50, 400, 30, options)
        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill(163, 161, 158);
    rect(pos.x, pos.y, 400, 30);
    }
}