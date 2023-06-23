let field = [
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  [2, "*", "*", "*"],
];

while (true) {
  generateNewNumber();
  const turnsNumber = requestDirection();

  rotateMultipleTimes(turnsNumber);
  shiftAndMerge();

  const revolutionsNumber = field.length - turnsNumber;
  rotateMultipleTimes(revolutionsNumber);
}

function generateNewNumber() {
  const y = randomInteger(0, 3);
  const x = randomInteger(0, 3);
  if (field[y][x] === "*") {
    const newCount = Math.random() > 0.75 ? 4 : 2;
    field[y][x] = newCount;
  } else {
    generateNewNumber();
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
      shiftAndMerge();
      break;

    case "s":
      return 3;
      break;

    case "a":
      return 2;
      break;

    case "w":
      return 1;
      break;
  }
}

//================================================================================================================================================
//The module in which the field rotates
//=============================================================================================================================================================

function rotateMultipleTimes(turnsNumber) {
  for (let i = 0; i < turnsNumber; i++) {
    rotateField();
  }
}

function rotateField() {
  let arrayForRotate = [];
  for (let i = 0; i < field.length; i++) {
    arrayForRotate.push([]);
  }

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      arrayForRotate[j][field.length - 1 - i] = field[i][j];
    }
  }
  field = arrayForRotate;
}

//=======================================================================================================================================
// Тhe мodule in which numbers are shifted and merged
//=======================================================================================================================================

function shiftAndMerge() {
  const newField = field.map((str) => {
    const arrayWithShifted = elementShift(str);
    const shiftAndMerge = mergeOfElements(arrayWithShifted);
    const finalArray = elementShift(shiftAndMerge);
    return finalArray;
  });
  field = newField;
}

function elementShift(stringFromField) {

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

function mergeOfElements(shiftedDigits) {
  for (let i = 0; i < shiftedDigits.length; i++) {
    if (
      shiftedDigits[shiftedDigits.length - i] ===
        shiftedDigits[shiftedDigits.length - i - 1] &&
      shiftedDigits[shiftedDigits.length - i] !== "*"
    ) {
      shiftedDigits[shiftedDigits.length - i] =
        shiftedDigits[shiftedDigits.length - i - 1] +
        shiftedDigits[shiftedDigits.length - i - 1];
      shiftedDigits[shiftedDigits.length - i - 1] = "*";
    }
  }
  return shiftedDigits;
}
