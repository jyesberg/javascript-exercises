const repeatString = function(str, num) {
    let stringReturn = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (i=0; i < num; i++) {
        stringReturn += str;
    }
    return stringReturn;
};

// Do not edit below this line
module.exports = repeatString;
