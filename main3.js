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
