// const fibonacci = function(num) {
let fibonacci = function(num) {
    let previousNumber = 1;
    let previousPreviousNumber = 0

    if (typeof num != 'number') {
        num = Number(num);
    }
    if (num === 0) {
        previousNumber = 0;
    } else if (num < 0) {
        return "OOPS";
    }
    // let arrTest = [1]

    for (i=1; i < num; i++) {
        let currentNumber = previousNumber + previousPreviousNumber;
        previousPreviousNumber = previousNumber;
        previousNumber = currentNumber;
        // arrTest.push(previousNumber);
    }
    // return(arrTest);
    return(previousNumber);
};

// i = 0 ; 1
// i = 1 ; 1
// i = 2 ; 2
// i = 3 ; 3
// i = 4 ; 5
// Do not edit below this line
module.exports = fibonacci;