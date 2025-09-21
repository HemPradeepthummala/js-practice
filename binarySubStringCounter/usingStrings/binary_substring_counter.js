const inputNumber = 65;
const subString = "00";
let number = inputNumber;
let resultedBinary = "";

while (number !== 0) {
  let remainder = number % 2;
  resultedBinary = remainder + resultedBinary;
  remainder && (number -= 1);
  number = number / 2;
}

let occuranceCounter = 0;
let limit = subString.length - 1;
for (let index = 0; index < resultedBinary.length - limit; index++) {
  let comparableString = "";
  let comparableStringIndex = index;
  let iterator = 0;
  while (iterator < subString.length) {
    comparableString = comparableString + resultedBinary[comparableStringIndex];
    comparableStringIndex++;
    iterator++;
  }
  subString === comparableString && occuranceCounter++;
}

console.log("Number =>", inputNumber, "Binary Number =>", resultedBinary);
console.log("SubString =>", subString, "Occurrence =>", occuranceCounter);
