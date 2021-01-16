class Bob {
    constructor(x,y,r){
        var options = {
            'isStatic':false,
            'restitution':0.3
            
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage("bird.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0,80 , 80);
        strokeWeight(2);
        
        pop();
    }
}
