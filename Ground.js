class ground{
    constructor(x,y){
        var options={
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,800,30,options);
        World.add(world,this.body)
    }
    display(){
        var pointA=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pointA.x,pointA.y,800,30);
    }

}