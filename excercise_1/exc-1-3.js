var input4 = [1, 2, 2, 4, 6, 9, 11, 12, 11, 666];

function findModus(arr) {
  //TODO
  // const obj = {};
  // arr.forEach((element) => {
  //   obj[element] ? obj[element]++ : (obj[element] = 1);
  // });
  // return Object.keys(obj)
  //   .filter((key) => {
  //     return obj[key] === Math.max(...Object.values(obj));
  //   })
  //   .map(Number);

  const moda = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (moda.has(arr[i])) {
      const count = moda.get(arr[i]);
      moda.set(arr[i], count + 1);
    } else {
      moda.set(arr[i], 1);
    }
  }
  const result = [];
  const maxCount = Math.max(...moda.values());
  moda.forEach((value, key) => {
    if (value === maxCount) {
      result.push(key);
    }
  });
  return result;
}

console.log(findModus(input4)); //[ 2, 11 ]
