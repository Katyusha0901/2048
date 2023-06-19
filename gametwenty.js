import generateRandom from "generateRandom.js";
import getMatrix, {
    addBoxToMatrix,
    changeMatrixBoxPosition,
    getEmptyMatrixCoordinates
  } from "./matrix";

let gameBoard = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["2", "*", "*"],
];

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function createPoint() {
  const newCount = generateCount();
  while (true) {
    const y = randomInteger(0, 3);
    const x = randomInteger(0, 3);

    if (field[y][x] === "*") {
      field[y][x] = newCount;
      return;
    }
  }
}

function generateCount() {
  return Math.random() > 0.75 ? 4 : 2;
}

//function getBoxPosition() {
  //  const emptyCoordinates = getEmptyMatrixCoordinates();
 //   const randomCoordinateIndex = generateRandom(0, emptyCoordinates.length - 1);
  
   // return emptyCoordinates[randomCoordinateIndex];
  //}
  