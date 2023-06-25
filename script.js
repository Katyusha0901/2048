let field = [
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  [2, "*", "*", "*"],
];

while (true) {
  generateNewCount();
  const turnsCount = requestDirection();

  rotateMultipleTimes(turnsCount);
  shiftAndMerge();

  const revolutionsCount = field.length - turnsCount;
  rotateMultipleTimes(revolutionsCount);
}

function generateNewCount() {
  const y = randomInteger(0, 3);
  const x = randomInteger(0, 3);
  if (field[y][x] === "*") {
    const newCount = Math.random() > 0.75 ? 4 : 2;
    field[y][x] = newCount;
  } else {
    generateNewCount();
  }
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function requestDirection() {
  const command = prompt(
    ` Поле выглядит так\n${field[0]}\n${field[1]}\n${field[2]}\n${field[3]}\nНапишите направление движения поля`
  );

  switch (command) {
    case "d":
      return 4;

    case "s":
      return 3;

    case "a":
      return 2;

    case "w":
      return 1;
  }
}

//================================================================================================================================================
//The module in which the field rotates
//=============================================================================================================================================================

function rotateMultipleTimes(turnsCount) {
  for (let i = 0; i < turnsCount; i++) {
    rotateField();
  }
}

function rotateField() {
  let rotatedField = [];
  for (let i = 0; i < field.length; i++) {
    rotatedField.push([]);
  }

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      rotatedField[j][field.length - 1 - i] = field[i][j];
    }
  }
  field = rotatedField;
}

//=======================================================================================================================================
// Тhe мodule in which counts are shifted and merged
//=======================================================================================================================================

function shiftAndMerge() {
  const newField = field.map((str) => {
    shiftElement(str);
    mergeElements(str);
    const shiftAndMergeElement = shiftElement(str);
    return shiftAndMergeElement;
  });
  field = newField;
}

function shiftElement(stringFromField) {
  for (let i = 0; i < stringFromField.length; i++) {
    for (let i = 0; i < stringFromField.length; i++) {
      if (stringFromField[i + 1] === "*") {
        stringFromField[i + 1] = stringFromField[i];
        stringFromField[i] = "*";
      }
    }
  }
  return stringFromField;
}

function mergeElements(arrayWithShiftedDigits) {
  const arr = arrayWithShiftedDigits;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[arr.length - i] === arr[arr.length - i - 1] &&
      arr[arr.length - i] !== "*"
    ) {
      arr[arr.length - i] = arr[arr.length - i - 1] + arr[arr.length - i - 1];
      arr[arr.length - i - 1] = "*";
    }
  }
}
