export default class Cell extends HTMLElement {
    x;
    y;
    isAlive;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
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

    setColor() {
        if (this.isAlive) {
            this.style.backgroundColor = "black";
        }
        else {
            this.style.backgroundColor = "white";
        }
    }

    flipAlive() {
        this.isAlive = !this.isAlive;
    }
}