function repeatStringNumTimes(str, num) {
  var resultStr = "";
      for (var i = 0; i < num; i++) {
        resultStr += str;
      }
  return resultStr;
}

console.log(repeatStringNumTimes("abc", 3));