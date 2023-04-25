var csvInput = "1,  Peter,  22;" + "2, Jim, 11,;" + "3, P eeter, 8 ;";

function tranformCsv(string) {
  //TODO
  const array = string.split(";");
  const filterArray = array.filter((elem) => elem);
  return filterArray.map((elem) => {
    if (elem) {
      const data = elem.split(", ");
      const obj = {
        id: Number(data[0]),
        name: data[1],
        age: parseInt(data[2]),
      };
      return obj;
    }
  });
}

console.log(tranformCsv(csvInput));
// [ { id: 1, name: 'Peter', age: 22 },
//    { id: 2, name: 'Jim', age: 11 },
//    { id: 3, name: 'P eeter', age: 8 } ]
