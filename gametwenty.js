let gameBoard = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
  [2, "*", "*"],
];

while (true) {
  newCount(gameBoard);
  const direction = goGame(gameBoard);
  repeatFunctionMultipleTimes(direction);
  const newGameBoard = algorithmFunction(gameBoard);

  const revolutionsNumber = 4 - direction;
  repeatFunctionMultipleTimes(revolutionsNumber);
}

function newCount(gameBoard) {
  const y = randomInteger(0, 3);
  const x = randomInteger(0, 3);
  if (gameBoard[y][x] === "*") {
    const newCount = Math.random() > 0.75 ? 4 : 2;
    gameBoard[y][x] = newCount;

    return gameBoard;
  }
  newCount(gameBoard);
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function goGame(gameBoard) {
  const command = prompt(
    ` Поле выглядит так\n${gameBoard[0]}\n${gameBoard[1]}\n${gameBoard[2]}\n${gameBoard[3]}\nНапишите направление движения поля`
  );
  let direction = 0;
  if (command === "d") {
    direction += 0;
  }
  if (command === "s") {
    direction += 3;
  }
  if (command === "a") {
    direction += 2;
  }
  if (command === "w") {
    direction += 1;
  }
  return direction;
}

function repeatFunctionMultipleTimes(direction) {
  for (let i = 0; i <= direction; i++) {
    fieldRotationBy90(gameBoard);
  }
  return gameBoard;
}

function fieldRotationBy90(gameBoard) {
  let newArr = [
    ["*", "*", "*"],
    ["*", "*", "*"],
    ["*", "*", "*"],
    ["*", "*", "*"],
  ];
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      newArr[j][gameBoard.length - 1 - i] = gameBoard[i][j];
    }
  }
  newArr = gameBoard;
  return gameBoard;
}

function algorithmFunction(gameBoard) {
  let newGameBoard = gameBoard.forEach((str) => {
    const first = elementShift(str);
    const second = unionOfElements(first);
    elementShift(second);
  });
  newGameBoard = gameBoard;
  return gameBoard;
}

function elementShift(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[arr.length - i] === "*") {
      arr[arr.length - i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = "*";
    }
  }
  return arr;
}

function unionOfElements(newArr) {
  for (let i = 1; i <= newArr.length - 1; i++) {
    if (
      newArr[newArr.length - i] === newArr[newArr.length - i - 1] &&
      newArr[newArr.length - i] !== "*"
    ) {
      newArr[newArr.length - i] =
        newArr[newArr.length - i - 1] + newArr[newArr.length - i - 1];
      newArr[newArr.length - i - 1] = "*";
    }
  }
  return newArr;
}
