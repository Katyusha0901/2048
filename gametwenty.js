let field = [
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  [2, "*", "*", "*"],
];

while (true) {
  generateNewNumber();
  const turnsNumber = requestDirection();
  console.log(turnsNumber);
  rotateMultipleTimes(turnsNumber);

  shiftAndMergeDigits();
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
      shiftAndMergeDigits();

    case "s":
      return 3;

    case "a":
      return 2;

    case "w":
      return 1;

    case undefined:
      requestDirection();
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
  const arrayForRotate = [];
  for (let i = 0; i < field.length; i++) {
    arrayForRotate.push([]);
  }

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      arrayForRotate[j][3 - i] = field[i][j];
    }
  }
  field = arrayForRotate;
}

//=======================================================================================================================================
// Тhe мodule in which numbers are shifted and merged
//=======================================================================================================================================

function shiftAndMergeDigits() {
  const newField = field.map((str) => {
    const arrayWithShiftedDigits = elementShift(str);
    const shiftAndMergeDigits = shiftAndMergeDigits(arrayWithShiftedDigits);
    const finalArray = elementShift(shiftAndMergeDigits);
    return finalArray;
  });
  field = newField;
}

function elementShift(stringFromArray) {
  for (let i = 1; i < stringFromArray.length; i++) {
    if (stringFromArray[stringFromArray.length - i] === "*") {
      stringFromArray[stringFromArray.length - i] =
        stringFromArray[stringFromArray.length - i - 1];
      stringFromArray[stringFromArray.length - i - 1] = "*";
    }
    if (
      stringFromArray[stringFromArray.length - i] === "*" &&
      stringFromArray[stringFromArray.length - i + 1] === "*"
    ) {
      stringFromArray[stringFromArray.length - i + 1] =
        stringFromArray[stringFromArray.length - i - 1];

      stringFromArray[stringFromArray.length - i] = "*";

      stringFromArray[stringFromArray.length - i - 1] = "*";
    }
  }
  return stringFromArray;
}

function mergeOfElements(shiftedDigits) {
  for (let i = 1; i < shiftedDigits.length; i++) {
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
