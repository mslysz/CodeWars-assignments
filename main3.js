//Exer 1
//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  const arr = string.split('');
  let result = '';
  arr.forEach((letter) => {
    if (letter === letter.toLowerCase()) {
      result += letter;
    } else {
      result += ' ' + letter;
    }
  });
  return result;
}

console.log(solution('camelCasing'));
console.log(solution('camelCasingTest'));
console.log(solution('upDownUpDownUpDown'));

//Exer 2
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result.
//2 -> 3 (1 + 2)
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

console.log(summation(8));
console.log(summation(2));

//Exer 3
//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//This function should return a number (final grade). There are four types of final grades:

//100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//0, in other cases

const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75;
  return 0;
};

console.log(finalGrade(100, 12));
console.log(finalGrade(99, 0));
console.log(finalGrade(55, 3));
console.log(finalGrade(20, 2));

//Exer 4
//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1

const correct = (string) =>
  string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I');

console.log(correct('L0ND0N'));
console.log(correct('DUBL1N'));
console.log(correct('51NGAP0RE'));

//Exer 5
//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length == []) {
    return 'no one likes this';
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Max', 'John', 'Mark', 'Max']));

//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:

const findNeedle = (haystack) =>
  'found the needle at position ' + haystack.indexOf('needle');

console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
);
