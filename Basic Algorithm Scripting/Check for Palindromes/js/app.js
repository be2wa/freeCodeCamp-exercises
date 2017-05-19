function palindrome(str) {
  var strToCompare = str.replace(/[\W_]/g, '').toLowerCase();
  var reversedString = strToCompare.split('').reverse().join('');
  return strToCompare === reversedString;
}

console.log(palindrome("not a palindrome"));