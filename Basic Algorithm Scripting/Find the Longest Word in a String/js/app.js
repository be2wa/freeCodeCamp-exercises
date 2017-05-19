function findLongestWord(str) {
  var splitStr = str.split(' ');
  var longestWordInStr = splitStr[0].length;
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longestWordInStr) {
      longestWordInStr = splitStr[i].length;
    }
  }
  return longestWordInStr;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));