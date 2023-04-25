let persons = [
  { firstName: "Jim", lastName: "Jimithy", age: 15 },
  { firstName: "Peter", lastName: "Peterson", age: 25 },
  { firstName: "Carl", lastName: "Carlson", age: 28 },
  { firstName: "Jane", lastName: "Janison", age: 22 },
];

//TODO
persons = persons.map((person) => {
  person.luckyNumber = person.firstName.length + person.lastName.length + 1;
  return person;
});

console.log(persons);

//[ { firstName: 'Jim',
//     lastName: 'Jimithy',
//     age: 15,
//     luckyNumber: 11 },
//   { firstName: 'Peter',
//     lastName: 'Peterson',
//     age: 25,
//     luckyNumber: 14 },
//   { firstName: 'Carl',
//     lastName: 'Carlson',
//     age: 28,
//     luckyNumber: 12 },
//   { firstName: 'Jane',
//     lastName: 'Janison',
//     age: 22,
//     luckyNumber: 12 } ]
