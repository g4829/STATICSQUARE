class Ground{
   constructor(x,y,width,height){
       var ground_options = {
        isStatic : true
        
       }
     this.width = width;
     this.height = height;

     this.body = Bodies.rectangle(x,y,width,height,ground_options);
     World.add (world,this.body);
   } 
   display(){
       var ground_position = this.body.position
      rectMode (CENTER);
      fill (109);
      rect(ground_position.x,ground_position.y,this.width,this.height);
       
   }
}