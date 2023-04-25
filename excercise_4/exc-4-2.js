var newObj = {
  //TODO
  set value(num) {
    this.oldValues.push(num);
  },
  oldValues: [],
};

newObj.value = 1;
newObj.value = 2;
newObj.value = 3;
newObj.value = 4;
console.log(newObj.oldValues); // [0, 1, 2, 3]
