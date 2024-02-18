const removeFromArray = function(arr) {
    console.log(arguments.length);
    for (x = 1; x < arguments.length; x++) {
        // console.log(arguments[x]);
        console.log('NEW X STARTING')
        for (i=0; i < arr.length; i++) {
            console.log(`arr[i] = ${arr[i]}`);
            console.log(`arguments x = ${arguments[x]}`);
            if (arr[i] === arguments[x]) {
                console.log(`REMOVING ${arr[i]}`);
                console.log(`REMOVING ${arguments[x]}`);
                arr.splice([i], 1);
            }
        }
    }
    return arr;
};

removeFromArray([1, 2, 2, 2, 'a', 3, 4], 'a', 2, 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
