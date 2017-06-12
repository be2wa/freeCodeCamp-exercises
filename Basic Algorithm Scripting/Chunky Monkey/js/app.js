const exArr = ["a", "b", "c", "d", "e"];

const chunkArrayInGroups = (arr, size) => {
  var temp = arr;
  var result = [];
  while (temp.length > size) {
    result.push(temp.splice(0, size));
  }
  temp.length && result.push(temp);
  return result;
}

console.log(exArr);
console.log(chunkArrayInGroups(exArr, 2));
console.log(exArr);

// why does the function modify the original array?