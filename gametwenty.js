let gameBoard = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  [2, "*", "*"],
  [2, "*", "*"],
];

function getUserInput() {
  const command = prompt(
    ` Поле выглядит так\n${gameBoard[0]}\n${gameBoard[1]}\n${gameBoard[2]}\n${gameBoard[3]}\nНапишите направление движения поля`
  );
  let direction = "";

  if (command === "s") {
    direction = "down";
    const newPosition = findNextPosition(direction);
    moveNumber(newPosition);
    newCount();
  }
  getUserInput(gameBoard);
}

function newCount() {
  const y = randomInteger(0, 3);
  const x = randomInteger(0, 3);

  if (gameBoard[y][x] === "*") {
    const newCount = Math.random() > 0.5 ? 4 : 2;
    gameBoard[y][x] = newCount;
    return;
  }
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function findCurrentPosition() {
  for (let i = 0; i <= 3; i++) {
    gameBoard[i].forEach((array) => {
      const j = array.findIndex((element) => typeof element === "number");
    });
  }

  return { y: i, x: j };
}

function moveNumber(newPlace) {
  const currentPosition = findCurrentPosition();

  if (gameBoard[newPlace.y][newPlace.x] === "*") {
    gameBoard[newPlace.y][newPlace.x] =
      gameBoard[currentPosition.y][currentPosition.x];
  }
}

function findNextPosition() {
  const currentPosition = findCurrentPosition();
  // if (direction === "up" && currentPosition.y >= 1) {
  return { y: currentPosition.y + 1, x: currentPosition.x };
  //}
}

while (true) {
  getUserInput();
}
