function camelToSnake(camel) {
  //TODO
  return camel
    .match(/[A-Z][a-z]*/g)
    .join("_")
    .toLowerCase();
}

console.log(camelToSnake("someNewWordToTransformAndAA")); //some_new_word_to_transform_and_a
