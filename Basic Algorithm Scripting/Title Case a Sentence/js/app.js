function titleCase(str) {
  var splitted = str.split(' ');
  var cased = [];
 for (var i = 0; i < splitted.length; i++) {
   cased.push(splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1).toLowerCase());
 }
  return cased.join(' ');
}

console.log(titleCase("I'm a little tea pot"));