function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0, 1);
    return arr.filter(function(el) {
        return args.indexOf(el) === -1;
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));