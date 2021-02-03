class sand{
    constructor(x,y){
        var options={
           
            density:1,
            mass:6,
            friction:5,
            restitution:1
        };
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body)
    }
    display(){
        var pointA=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pointA.x,pointA.y)
        rotate(angle);
        rectMode(CENTER);
        fill(255,70,0);
        ellipse(0,0,10,10);
        pop()
    }

}