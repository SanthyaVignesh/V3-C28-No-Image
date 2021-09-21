class CannonBall{
    constructor(x,y){
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density :1.0,
            isStatic: true
        }
        this.r = 40;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("assets/cannonball.png");
        this.animation = [this.image];
        this.speed = 0.05;
        this.sink = false;
        this.trajectory = [];
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        var index = floor(this.speed%this.animation.length)
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index],0,0,this.r,this.r);
        pop();

        if(this.body.velocity.x > 0 && this.body.position.x > 300){
            var posiiton = [this.body.position.x , this.body.position.y];
            this.trajectory.push(posiiton);
        }

        for(var i=0; i<this.trajectory.length ; i++){
            image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5);
        }
    }

    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x : velocity.x , y: velocity.y});
    }

    animate(){
        this.speed +=0.05;
    }

    remove(index){
        this.isSink = true;

        Matter.Body.setVelocity(this.body,{x:0,y:0});
    
        this.animation = waterSplashAnimation;
        this.speed = 0.05;
        this.r = 150;

        setTimeout(()=>{
            World.remove(world,this.body);
            balls.splice(index,1);
        },2000);
    }
}