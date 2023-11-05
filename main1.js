//Exer 1
//We need a function that can transform a number (integer) into a string.


function numberToString(num) {
  return String(num);

}
console.log(typeof (numberToString(123)));
console.log(typeof (numberToString(999)));
console.log(numberToString(-100));


//Exer 2

//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
//The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
  return name.charAt(0) === 'R' || name.charAt(0) === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Robert'));
console.log(areYouPlayingBanjo('Martin'))
console.log(areYouPlayingBanjo('Diana'))
console.log(areYouPlayingBanjo('renata'))

//Exer 3
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("adg", "dg")); //true
console.log(solution("lfs", "d")); //false

//Exer 4
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheep) {
  let numbersOfSheeps = 0;
  sheep.forEach((oneSheep) => {
    if (oneSheep) {
      numbersOfSheeps++;
    }
  });
  return numbersOfSheeps;
}

console.log(countSheeps([true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]))

//Exer 5
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  numbers.forEach((number) => {
    format = format.replace("x", number);
  });
  return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Exer 6
////Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter((element) => typeof element !== 'string')

}

console.log(filter_list([1, 2, 'a', 'b']))
console.log(filter_list([1, 'a', 'b', 0, 15]))
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))

// Exer 7
//you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81) 

function squareDigits(num) {
  const digits = [...num.toString()];
  const squaredDigits = digits.map(digit => digit ** 2); //The map() method creates a new array with the digits squared.
  let result = squaredDigits.join('');
  let numberResult = Number(result)
  return numberResult
}


console.log(squareDigits(3212));
console.log(squareDigits(765));
console.log(squareDigits(0));

//Exer 8 
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = (number) => number % 2 === 0 ? 'Even' : 'Odd';

console.log(evenOrOdd(5));
console.log(evenOrOdd(4));

//Exer 9 
//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

function findAverage(array) {
  let sum = 0;
  array.forEach((num) => {
    sum += num
  })
  if (array.length === 0) {
    return 0
  }
  return Number(sum / array.length)
}

console.log(findAverage([1, 1, 1, 1]));
console.log(findAverage([1, 2, 3, 4]));

//Exer 10
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;
  let letters = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (str[i] === letters[j]) {
        count++
      }
    }
  }

  return count;
}
console.log(getCount("rabalatksdad"))

//Exer 11
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x) {
  let sum = 0;
  x.forEach((element) => {
    sum += Number(element)
  })
  console.log(sum)
  return sum
}

sumMix([9, 3, '7', '3']);
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']);

//Exer 12
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  let newOrder = n.toString().split('').sort((a, b) => { return b - a }).join('');
  return +newOrder;
}


console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));