const rows = 10;
const columns = 20;
const width = 30;
const height = 30;


class Cell {
    constructor(x, y, color){
        this.x =x;
        this.y =y;
        this.color = color;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.y * 30, this.x * 30 + 620, 30, 30);
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
             grid[row][column] = new Cell(row, column, (row+column)%2 ? 'red' : 'gray')
          
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

// grid[2][3].color = 'yellow';
// drawGrid();

function drawSq(w,z) {
    grid[w][z].color = 'yellow';
    grid[w][z+1].color = 'yellow';
    grid[w+1][z].color = 'yellow';
    grid[w+1][z+1].color = 'yellow';
    drawGrid();
}

drawSq(2,3);
drawSq(5,7);
   