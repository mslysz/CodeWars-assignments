//Exer 1
//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
  let rna = [];
  dna.split('').forEach((element) => {
    if (element === 'T') {
      rna.push('U');
    } else rna.push(element);
  });
  return rna.join('');
}
//Another solution
// function DNAtoRNA(dna) {
//   return dna.replace("T", "U")
// }

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('TGACCCCA'));
console.log(DNAtoRNA('AGGGGCACCGC'));
console.log(DNAtoRNA('ATTCGATG'));

//Exer 2
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let doubledChars = str.split('').map((element) => element.repeat(2));
  return doubledChars.join('');
}
//Another solution

// function doubleChar(str) {
//   return str.split('').map(c => c + c).join('');
// }
console.log(doubleChar('str'));
console.log(doubleChar('pink'));

//Exer 3
//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

console.log(digitize(35231));
console.log(digitize(0));

//Exer 4
//here was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((a, b) => a + b, 0);
  let average = sum / classPoints.length;
  return average < yourPoints ? true : false;
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([5, 5], 2));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));

//Exer 5
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
  let min = Infinity;
  let min2 = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min2 = min;
      min = numbers[i];
    } else if (numbers[i] < min2) {
      min2 = numbers[i];
    }
  }
  return min + min2;
}

//Another solution
// function sumTwoSmallestNumbers(numbers) {
// numbers = numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

//Exer 6
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.length % 2 === 0) {
      return s[s.length / 2 - 1] + s[s.length / 2];
    } else {
      return s[s.length / 2 - 0.5];
    }
  }
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));

//Exer 7
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  const words = str.split(' ');
  const reverseArray = words.map((word) => word.split('').reverse().join(''));
  return reverseArray.join(' ');
}

console.log(reverseWords('This is an example!'));

//Exer 8
//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const result = {};
  for (i = 0; i < string.length; i++) {
    const letter = string[i];
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

console.log(count('aba'));

//Exer 9
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url) {
  const domain = url.match(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im
  )[1];
  return domain.split('.')[0];
}

//Another solution

// function domainName(url) {
//   url = url.replace('http://', '');
//   url = url.replace('https://', '');
//   url = url.replace('www.', '');
//   return url.split('.')[0];
// }

console.log(domainName('http://google.co.jp'));
console.log(domainName('http://www.google.com'));
console.log(
  domainName(
    'https://github.com/mslysz/CodeWars-assignments/blob/main/main2.js'
  )
);

//Exer 10
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let count = 0;

  num = num.toString();
  while (num.length > 1) {
    count++;
    num = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return count;
}

console.log(persistence(39));
console.log(persistence(999));

//Exer 11
//Let's play! You have to return which player won! In case of a draw return Draw!.

//Examples(Input1, Input2 --> Output):
//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!';
  } else if (p1 === p2) {
    return 'Draw!';
  } else {
    return 'Player 2 won!';
  }
};

console.log(rps('paper', 'scissors'));
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'paper'));
