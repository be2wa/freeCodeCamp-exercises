function largestOfFour(arr) {
  var arr1 = [];
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    arr1.push([]);
    var num = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      num = arr[i][j] > num ? arr[i][j] : num;
    }
    arr1[i].push(num);
  }
  for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i][0]);
  }
  return arr2
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));