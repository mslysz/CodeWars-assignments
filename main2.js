//Exer 1 
//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
  let rna = [];
  dna.split('').forEach((element) => {
    if (element === "T") {
      rna.push("U");
    } else rna.push(element);
  })
  return rna.join('')
}
//Another solution
// function DNAtoRNA(dna) {
//   return dna.replace("T", "U")
// }

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("TGACCCCA"));
console.log(DNAtoRNA("AGGGGCACCGC"));
console.log(DNAtoRNA("ATTCGATG"));

//Exer 2 
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let doubledChars = str.split('').map((element) => element.repeat(2))
  return doubledChars.join('')
}
//Another solution

// function doubleChar(str) {
//   return str.split('').map(c => c + c).join('');
// }
console.log(doubleChar("str"))
console.log(doubleChar("pink"))


//Exer 3
//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

console.log(digitize(35231))
console.log(digitize(0))


//Exer 4
//here was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((a, b) => a + b, 0)
  let average = sum / classPoints.length;
  return average < yourPoints ? true : false;
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([5, 5], 2));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));