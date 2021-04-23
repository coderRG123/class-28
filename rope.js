class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        this.body1=body1
        this.body2=body2
        var options={
            bodyA:body1,
            bodyB:body2,
            length:100,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        stroke("red");
    line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, 
        this.rope.bodyB.position.x+this.offsetX, this.rope.bodyB.position.y+this.offsetY);
    }
}