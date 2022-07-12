export default class Cell extends HTMLElement {
    x;
    y;
    isAlive;
    currentGrid;
    newGrid;

    constructor(x, y, currentGrid, newGrid) {
        super();
        this.x = x;
        this.y = y;
        this.currentGrid = currentGrid;
        this.newGrid = newGrid;
        this.isAlive = false;
        this.init();
        this.listeners();
    }

    init() {
        this.style.width = "5px";
        this.style.height = "5px";
        this.style.backgroundColor = "white";
    }

    listeners() {
        this.addEventListener("click", (() => {
            this.flipAlive();
            this.setColor();
        }));
        // TODO: add multiple 'isAlive' toggle with mouseover and mousedown
    }

    notify() {
        this.checkAround();
        this.setColor();
    }

    setColor() {
        if (this.isAlive) {
            this.style.backgroundColor = "black";
        }
        else {
            this.style.backgroundColor = "white";
        }
    }

    checkAround() {
        // TODO: make this prettier
        let liveCells = 0;
        let deadCells = 0;

        let topLeft = this.currentGrid[this.y -1][this.x -1];
        let topCenter = this.currentGrid[this.y -1][this.x];
        let topRight = this.currentGrid[this.y -1][this.x +1];
        let centerLeft = this.currentGrid[this.y][this.x -1];
        let centerRight = this.currentGrid[this.y][this.x -1];
        let bottomLeft = this.currentGrid[this.y +1][this.x -1];
        let bottomCenter = this.currentGrid[this.y +1][this.x];
        let bottomRight = this.currentGrid[this.y -1][this.x +1];

        if (topLeft == null || !topLeft.isAlive) deadCells++;
        else liveCells++
        if (topCenter == null || !topCenter.isAlive) deadCells++;
        else liveCells++
        if (topRight == null || !topRight.isAlive) deadCells++;
        else liveCells++
        if (centerLeft == null || !centerLeft.isAlive) deadCells++;
        else liveCells++
        if (centerRight == null || !centerRight.isAlive) deadCells++;
        else liveCells++
        if (bottomLeft == null || !bottomLeft.isAlive) deadCells++;
        else liveCells++
        if (bottomCenter == null || !bottomCenter.isAlive) deadCells++;
        else liveCells++
        if (bottomRight == null || !bottomRight.isAlive) deadCells++;
        else liveCells++

        if (this.isAlive && (liveCells === 2 || liveCells === 3)) {
            this.isAlive = true;
        }
        else if (!this.isAlive && liveCells === 3) {
            this.isAlive = true;
        }
        else {
            this.isAlive = false;
        }

    }

    flipAlive() {
        this.isAlive = !this.isAlive;
    }
}