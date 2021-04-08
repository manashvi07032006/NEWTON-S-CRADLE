class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX, y: this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);
        stroke("blue")

        var X1 = pointA.x;
        var Y1 = pointA.y;
        var X2 = pointB.x + this.offsetX;
        var Y2 = pointB.y + this.offsetY;
        line(X1, Y1, X2, Y2);
    
    }
}