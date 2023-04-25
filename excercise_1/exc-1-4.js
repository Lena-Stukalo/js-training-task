input5 = [1, 4, 2, 1, 2, 2, 2, 3, 9, 8, 33];

function findUnique(arr) {
  //TODO
  return arr.filter((element, index) => {
    if (arr.indexOf(element) === index) {
      return element;
    }
  });
}

console.log(findUnique(input5)); // [ 3, 4, 8, 9, 33 ]
