const canvas = document.getElementById('canvasId');
const context = canvas.getContext("2d");


const rows = 10;
const columns = 10;
const width = 25;
const height = 25;


class Cell {
    constructor(x, y, color){
        this.x =x;
        this.y =y;
        this.color = color;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.y * 25, this.x * 25, 25, 25);
        context.fill();
        context.stroke();
        context.closePath();
    }
    
}

let grid = [];

const createGrid = () => {
    for(let row = 0; row < rows; row++){
        grid[row] = [];
        for (let column = 0; column <columns; column++){
             grid[row][column] = new Cell(row, column, 'white')
          
        }
    }
}

const drawGrid = () => {
    for(let row = 0; row < rows; row++){
        for (let column = 0; column <columns; column++){
             grid[row][column].draw();
        }
    }    
}

createGrid();
drawGrid();



   