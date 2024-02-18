const removeFromArray = function(arr) {
    for (x = 1; x < arguments.length; x++) {
        for (i = arr.length; i > -1; i--) {
            if (arr[i] === arguments[x]) {
                arr.splice([i], 1);
            }
        }
    }
    return arr;
};

removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
