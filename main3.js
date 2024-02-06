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
