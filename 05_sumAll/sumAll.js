// create a function that accepts 2 parameters
// declare variable sum
// Determine which number is lowest, then loop from that number to the higher number
// Inside the loop, sum += i
// outside the loop, return sum

const sumAll = function(num1, num2) {
    sum = 0;    
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    if (typeof num1 != "number" || typeof num2 != "number") {
        return 'ERROR';
    }
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }    
    for (i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

sumAll(1, 13);

// Do not edit below this line
module.exports = sumAll;
