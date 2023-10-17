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