var obj = {
  a: 2,
  b: "22",
  c: false,
  d: "b",
  f: 3.14,
  g: 42,
  v: 34,
  fun: (el) => el,
  n: NaN,
};

//TODO
let count = 0;
for (let x in obj) {
  if (typeof obj[x] === "number" && !isNaN(obj[x])) {
    count = count + 1;
  }
}
console.log(count); // 3
