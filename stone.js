class stone{
    constructor(x,y){
        var options={
           
            density:2,
            mass:6,
            restitution:0.5,
            friction:1
        };
        this.body=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body)
    }
    display(){
        var pointA=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pointA.x,pointA.y)
        rotate(angle);
        rectMode(CENTER);
        fill(49,70,90);
        rect(0,0,50,50);
        pop()
    }

}