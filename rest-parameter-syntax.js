/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

/*The rest parameter syntax works by combining individual element
into an array.
it can also be used to represent the rest of the values 
when destructuring an array or object */ 

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1,2,3);
console.log('sum:', sum);

// Extra arguments are ignored, no rest parameter
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log('sum2:', sum2);// not what we want, so let's use the rest parameter

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
  let sum = a + b + c; // sum of the 3 first variables, easy enough but what about the rest of num...
  for (let i of rest) {
    sum += i;
  }
  return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum3);

// challenge on rest parameter syntax

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);


const updateSortReverse = (arr, ...letters) => {
    let allLetters = [...arr, ...letters];
    return allLetters.sort().reverse();
};

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);

