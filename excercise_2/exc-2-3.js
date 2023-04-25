function isPalindrom(word) {
  //TODO
  return word === word.split().reverse().join("");
}

console.log(isPalindrom("ohoho")); //true
