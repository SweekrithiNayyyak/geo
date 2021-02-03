

class hamer{
    constructor(x,y){
        var options={
            density:2
        };
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=80;
        this.height=80
        World.add(world,this.body)
    }
    display(){
        var pointA=this.body.position;
        
        pointA.x=mouseX;
        pointA.y=mouseY;
        var angle=this.body.angle;
        push()
        translate(pointA.x,pointA.y)
        rotate(angle)
        
        rectMode(CENTER);
        fill("pink");
        rect(0,0,this.width,this.height);
        pop()
    }

}