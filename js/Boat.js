class Boat{
    constructor(x,y,width,height,boatPos,boatAnimation){
        var options  = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        };
        this.speed = 0.05
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.boatPos = boatPos;
        this.animation = boatAnimation;
        this.isBroken = false;
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        var index= floor(this.speed%this.animation.length);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.boatPos, this.width, this.height);
        pop();

    }

    remove(index){
        this.isBroken = true;
        this.animation = bbAnimation;
        setTimeout(()=>{Matter.World.remove(world,boats[index].body);
        boats.splice(index,1)},2000);
    }

    animate(){
        this.speed += 0.05
    }
}