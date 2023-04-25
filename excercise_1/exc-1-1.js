const input = [1, 3, 6, 0, 5, -2, 9, 11, 16];

//TODO
const initialValue = 0;
const total = input.reduce((EvenSumm, curentValue) => {
  if (curentValue % 2 === 0) {
    return EvenSumm + curentValue;
  }
  return EvenSumm;
}, initialValue);
console.log(total); // 20
