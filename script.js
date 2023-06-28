let field = [
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  [2, "*", "*", "*"],
];

while (true) {
  generateNewValue();
  const turnsValue = requestDirection();

  rotateMultipleTimes(turnsValue);
  shiftAndMerge();

  const revolutionsValue = field.length - turnsValue;
  rotateMultipleTimes(revolutionsValue);
}

function generateNewValue() {
  const y = randomInteger(0, 3);
  const x = randomInteger(0, 3);

  if (field[y][x] === "*") {
    const newValue = Math.random() > 0.75 ? 4 : 2;
    field[y][x] = newValue;
  } else {
     generateNewValue();
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

    default:
      return requestDirection();
  }
}

//================================================================================================================================================
//The module in which the field rotates
//=============================================================================================================================================================

function rotateMultipleTimes(turnsValue) {
  for (let i = 0; i < turnsValue; i++) {
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
// Тhe мodule in which values are shifted and merged
//=======================================================================================================================================

function shiftAndMerge() {
  field.forEach((str) => {
    shiftElement(str);
    mergeElements(str);
    shiftElement(str);
  });
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
}

function mergeElements(arrayWithShiftedDigits) {
  const array = arrayWithShiftedDigits;

  for (let i = 0; i < array.length; i++) {
    if (
      array[array.length - i] === array[array.length - i - 1] &&
      array[array.length - i] !== "*"
    ) {
      array[array.length - i] =
        array[array.length - i - 1] + array[array.length - i - 1];
      array[array.length - i - 1] = "*";
    }
  }
}
