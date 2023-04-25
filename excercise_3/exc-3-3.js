let persons = [
  { firstName: "Jim", lastName: "Jimithy", age: 15 },
  { firstName: "Peter", lastName: "Peterson", age: 25 },
  { firstName: "Carl", lastName: "Carlson", age: 28 },
  { firstName: "Jane", lastName: "Janison", age: 22 },
];

//TODO
const oldestPerson = persons.sort((a, b) => b.age - a.age)[0];

console.log(oldestPerson); // { firstName: 'Carl', lastName: 'Carlson', age: 28 }
