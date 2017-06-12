const truncateString = (str, num) => num >= str.length ? str : num <= 3 ? str.slice(0, num).concat('...') : str.slice(0, num - 3).concat('...');

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));