class Bob {
    constructor(x,y){
        var options={
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
        }

   this.body = Bodies.circle(x, y, 15, options);
   World.add(world, this.body);
    }

    display(){
    push();
    fill("white");
    stroke("blue");
    ellipse(this.body.position.x, this.body.position.y, 30, 30);
    pop();
    }
    }