import Grid from "./Grid.js";
import Cell from "./Cell.js";

function start() {
    customElements.define("x-cell", Cell);
    customElements.define("x-grid", Grid);
}

start();
