function acceptThreeFunctions(firstFunc, secondFunc, thirdFunc, numder = 42) {
  //TODO
  return Math.max(firstFunc(numder), secondFunc(numder), thirdFunc(numder));
}

console.log(
  acceptThreeFunctions(
    (a) => a * 2,
    (b) => b * 3,
    (c) => c * 4
  )
); // 168
