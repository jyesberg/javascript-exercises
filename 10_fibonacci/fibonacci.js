// const fibonacci = function(num) {
let fibonacci = function(num) {
    if (typeof num != 'number') {
        num = Number(num);
    }
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    }
    let previousNumber = 1;
    let previousPreviousNumber = 0

    for (i=1; i < num; i++) {
        let currentNumber = previousNumber + previousPreviousNumber;
        previousPreviousNumber = previousNumber;
        previousNumber = currentNumber;
    }
    return(previousNumber);
};
// Do not edit below this line
module.exports = fibonacci;