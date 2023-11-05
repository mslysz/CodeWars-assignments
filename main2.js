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