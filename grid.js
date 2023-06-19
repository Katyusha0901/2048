import { Cell } from "cell.js";

const gridSize = 4;
const cellsCount = gridSize * gridSize;

export class Grid {
  constructor(gridElement) {
    this.cells = [];
    for (let index = 0; index < cellsCount; index++) {
      this.cells.push(
        new Cell(gridElement, i % gridSize, Math.floor(i / gridSize))
      );
    }
  }
}
