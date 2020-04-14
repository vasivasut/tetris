const canvas = document.getElementById('canvasId');
const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

console.log('');
console.log('************************* Exercitiul 1 *****************************')
console.log('');

    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(100, 350);
    context.lineTo(300, 250);
    context.closePath();
    context.stroke();
    context.fillStyle = "gray";
    context.fill();

console.log('');
console.log('************************* Exercitiul 2 *****************************')
console.log('');



function drawRect(x, y, l1, l2, color){
        context.beginPath();
        context.rect(x, y, l1, l2);
        context.stroke();
        context.closePath();
        context.fillStyle = color;
        context.fill();
}

drawRect (110, 100, 90, 180, 'red');

