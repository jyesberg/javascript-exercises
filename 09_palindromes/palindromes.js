let palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let stringReverse = str.split("").reverse().join('');
    if (stringReverse === str) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
