const add = function(num1, num2) {
  return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(arr) {
  // function sumAgain(total, currentItem) {
  //   return total + currentItem;
  // }
  // return arr.reduce(sumAgain, 0);
  return arr.reduce((total, currentItem) => total + currentItem, 0);  
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => total * currentItem, 1); 
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
  let sum = 1;
  for (let i=1; i <= num; i++) {
    sum *= i;
  }
  return sum;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
