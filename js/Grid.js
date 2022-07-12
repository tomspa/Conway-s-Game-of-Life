import Cell from "./Cell.js";

export default class Grid extends HTMLElement {
    currentCellGrid;
    newCellGrid;
    width;
    height;
    cellSize;

    constructor(width = 100, height = 100, cellSize = 5) {
        super();
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.init();
        this.createAndSubscribeCells();
        this.draw();
        this.notifyAll();
    }

    init() {
        this.classList.add("grid");
        this.style.backgroundColor = "black";
        this.style.padding = "2px";
        this.style.gridTemplateColumns = "repeat(" + this.width + ", 1fr)";
        this.style.gridTemplateRows = "repeat(" + this.height + ", 1fr)";
    }

    createAndSubscribeCells() {
        this.currentCellGrid = [];

        for (let y = 0; y < this.height; y++) {
            this.currentCellGrid[y] = [];

            for (let x = 0; x < this.width; x++) {
                this.currentCellGrid[y][x] = new Cell(x, y, this.currentCellGrid, this.newCellGrid);
            }
        }
    }

    draw() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.appendChild(this.currentCellGrid[y][x]);
            }
        }
    }

    notifyAll() {
        this.newCellGrid = this.currentCellGrid;

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.currentCellGrid[y][x].notify();
            }
        }

        this.currentCellGrid = this.newCellGrid;
    }
}