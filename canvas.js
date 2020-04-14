const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.getElementById('playground').append(canvas);
const context = canvas.getContext("2d");

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
    move(stepX, stepY) {
        this.bounce();
        this.x += stepX * this.dx; //this.x = this.x + stepX;
        this.y += stepY * this.dy;
        this.draw();
    }
    bounce(){
        if (this.x >= canvas.width - this.radius) {
            this.dx = -1;
        }
        if (this.y >= canvas.height - this.radius) {
            this.dy = -1;
        }
        if (this.x <= this.radius) {
            this.dx = 1;
        }
        if (this.y <= this.radius) {
            this.dy = 1;
        }

    }
}

const circle = new Circle(100, 150, 75, 'blue');

// const circle = {
//     position: {x: 100, y:200},
//     radius:50,
//     startAngle: 0,
//     endAngle: 2 * Math.PI
// }
// function drawCircle(){
//     context.beginPath();
//     //context.arc(100, 100, 20, 0, 2 * Math.PI);
//     context.arc(
//     circle.position.x,
//     circle.position.y,
//     circle.radius,
//     circle.startAngle,
//     circle.endAngle
//     );
//     context.stroke();
//     context.closePath();
// }

// context.beginPath();
// context.arc(100, 200, 20, 0, 2 * Math.PI);
// context.stroke();
// context.closePath();

function animateCircle () {
    console.log("se apeleaza");
    context.clearRect(0, 0, canvas.width, canvas.height);
    // circle.position.x++;
    // circle.position.y++;
    // drawCircle();
    // circle.draw();
    circle.move(10,10);
}

//setInterval(animateCircle, 10000);




