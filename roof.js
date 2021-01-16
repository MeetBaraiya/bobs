class Roof {
    constructor (x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle (x,y,width,height,options);
        this.width = width;
        this.height= height;
        this.image = loadImage("wood2.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, 600,250, this.width, this.height);
    }
}