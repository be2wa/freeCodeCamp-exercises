function confirmEnding(str, target) {
  return str.substr(str.length - target.length, target.length) === target ? true : false;
}

console.log(confirmEnding("Open sesame", "same"));