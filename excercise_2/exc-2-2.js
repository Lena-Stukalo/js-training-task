function snakeToCamel(snake) {
  //TODO
  return snake
    .split("_")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(snakeToCamel("some_new_word_to_transform_and_a")); //someNewWordToTransformAndA
