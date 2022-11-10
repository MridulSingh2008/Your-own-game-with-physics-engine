class Slingshot {

constructor(bdyA,bdyB){

var options={
 bodyA:bdyA,
 bodyB:bdyB,
 stiffness:0.04,
 length:15
    }
this.slingshot=Matter.Constraint.create (options);

World.add(world,this.slingshot);
}

show(){
//line(x1,y2,x2,y2)

var pointA= this.slingshot.bodyA.position
var pointB= this.slingshot.bodyB.position
strokeWeight(2)
line(pointA.x,pointA.y,pointB.x,pointB.y)

}

}