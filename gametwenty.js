let gameBoard = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["2", "*", "*"],
];

function getUserInput() {
    const command = prompt(
      ` Поле выглядит так\n${gameBoard[0]}\n${gameBoard[1]}\n${gameBoard[2]}\n${gameBoard[3]}\nНапишите направление движения поля`
    );
    return command
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function createPoint() {
  const newCount = generateCount();
  while (true) {
    const y = randomInteger(0, 3);
    const x = randomInteger(0, 3);

    if (gameBoard[y][x] === "*") {
        gameBoard[y][x] = newCount;
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



  console.log(gameBoard);
  getUserInput();