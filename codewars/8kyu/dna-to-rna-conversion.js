// quesiton url ::-- https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// question instruciton :: -----------------------

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// solution :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function DNAtoRNA(dna) {
  const arr = dna.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "T") {
      arr[i] = "U";
    }
  }
  return arr.join("");
}
