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