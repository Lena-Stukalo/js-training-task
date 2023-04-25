var input6 = { a: 1, b: 2, ccc: "abl", d: true };

function objectToString(obj) {
  //TODO
  let tostringArray = [];
  for (const x in obj) {
    tostringArray.push(`${x} -> ${obj[x]}`);
  }
  return `(${tostringArray.join("; ")})`;
}

console.log(objectToString(input6)); //(a -> 1; b -> 2; ccc -> abl; d -> true)
