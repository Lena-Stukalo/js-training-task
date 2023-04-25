var input2 = [1, 2, 4, 6, 9, 11, 11, 12];
var input3 = [1, 2, 4, 6, 9, 11, 11, 12, 13];

function findMedian(arr) {
  //TODO
  if (arr.length % 2 === 0) {
    const low = arr.length / 2 - 1;
    const up = arr.length / 2;
    return (arr[low] + arr[up]) / 2;
  }
  return arr[Math.ceil(arr.length / 2) - 1];
}

console.log(findMedian(input2)); // 7.5
console.log(findMedian(input3)); // 9
