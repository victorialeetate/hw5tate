console.log("Victoria Tate's Output from Example 2");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array of odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// Array of numbers divisible by 2 or 5
const divisibleBy2or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log(divisibleBy2or5);

// Array of numbers divisible by 3 (squared)
const divisibleBy3 = numbers.filter(num => num % 3 === 0).map(num => num ** 2);
console.log(divisibleBy3);

// Square numbers divisible by 3
const numbersDivisibleBy3Squared = numbers.map(num => num % 3 === 0 ? num ** 2 : num);
console.log(numbersDivisibleBy3Squared);

// Sum of the following: square the numbers divisible by 5
const sumOfSquares = numbers.filter(num => num % 5 === 0).reduce((sum, num) => sum + num ** 2, 0);
console.log(sumOfSquares);