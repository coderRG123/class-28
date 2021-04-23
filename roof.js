class Roof {
    constructor(x,y){
        var options={
        isStatic:true

        }

   this.body = Bodies. rectangle(x, y, 100, 20, options);
   World.add(world, this.body);
    }

    display(){
    push();
    rectMode(CENTER);
    fill("white");
    stroke("blue");
    rect(this.body.position.x, this.body.position.y, 200, 20);
    pop();
    }
    }