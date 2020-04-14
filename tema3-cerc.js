console.log('');
console.log('************************* Exercitiul 3 *****************************')
console.log('');

class Circle {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 1;
        this.dy = 1;
    }
    draw(){
        context.beginPath();
        // if(this.dx = -1){
        //     context.arc(this.x, this.y,this.radius, 0, 2 * Math.PI);
        // }
        // if(this.dx = 1){
        //     context.arc(this.x, this.y,this.radius, 0, 2 * Math.PI);
        // }
        // if(this.dx = 1){
        //     this.radius += 1
            // this.draw();
        // } 
        context.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI
        );
        context.stroke();
        context.fillStyle =  this.color;
        context.fill();
        context.closePath();
    }
    move(stepX) {
        
        this.x += stepX * this.dx; 
        // if(this.dx = 1){
        //     this.radius = this.radius +1;
        // }else{
        //     this.radius = this.radius -1;
        // }
        this.radius += 1 * this.dx;
        this.draw(); 
        this.bounce();  
    }
    bounce(){
        if (this.x >= canvas.width - this.radius) {
            this.dx = -1;
            this.color = 'red';
                    }
        if (this.x <= this.radius) {
            this.dx = 1;
            this.color = 'gray';
        }
    }
}

const circle = new Circle(100, 500, 35, 'gray');

function animateCircle () {
    context.clearRect(0, 360, canvas.width, 240);
    circle.move(10);
}

setInterval(animateCircle, 50);