var anotherObj = {
  a: 1,
  _b: 2,
  _c: 4,
  _d: () => {},
  e: () => {},
};

//TODO
for (x in anotherObj) {
  if (x.startsWith("_")) {
    delete anotherObj[x];
  }
}

console.log(anotherObj); //{ a: 1, e: [Function: e] }
