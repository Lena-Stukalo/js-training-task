var changes = "+++-+---++--+-+-++";

function countOfChages(str) {
  //TODO
  const operations = str.split("");
  return operations.reduce((summ, curentValue, currentIndex) => {
    if (currentIndex === 0 || curentValue === operations[currentIndex - 1]) {
      return summ;
    } else {
      return summ + 1;
    }
  }, 0);
}

console.log(countOfChages(changes)); //10
