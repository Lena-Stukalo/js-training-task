const prepareboxs = (number = 100) => {
  const boxes = Array.from(Array(number).keys());
  return boxes.sort(() => Math.random() - 0.5);
};
const randomSelect = (number = 100) => {
  if (number % 2 !== 0) {
    throw console.error(`Not even number`);
  }
  const tries = number / 2;
  for (let i = 0; i < number; i++) {
    const person = i;
    for (let j = 0; j < tries; j++) {
      const ramdomTries = prepareboxs(number).slice(0, tries);
      if (!ramdomTries.includes(person)) {
        return false;
      }
    }

    return true;
  }
};
const smartSelect = (number = 100) => {
  if (number % 2 !== 0) {
    throw console.error(`Not even number`);
  }
  const tries = number / 2;
  const room = prepareboxs(number);
  let win = true;
  for (let i = 0; i < number; i++) {
    let isFound = false;
    let currentBox = i;
    for (let j = 0; j < tries; j++) {
      if (i === room[currentBox]) {
        isFound = true;
      } else {
        currentBox = room[currentBox];
      }
    }
    if (!isFound) {
      win = false;
      break;
    }
  }
  return win;
};
const doTry = (way, number) => {
  let countWin = 0;
  for (let i = 0; i < number; i++) {
    if (way()) {
      countWin++;
    }
  }
  return (countWin / number) * 100;
};
console.log(`Random way ${doTry(randomSelect, 10000)}%`);
console.log(`Smart way ${doTry(smartSelect, 10000).toFixed(4)}%`);
