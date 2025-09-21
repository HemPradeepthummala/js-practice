const inputNumber = 21;
const subString = "101";
let number = inputNumber;
let resultedBinary = "";

while (number !== 0) {
  let remainder = number % 2;
  resultedBinary = remainder + resultedBinary;
  remainder && (number -= 1);
  number = number / 2;
}

let occuranceCounter = 0;

for (let index = 0; index < resultedBinary.length - 1; index++) {
  let comparableString = "";
  let substringIndex = index;
  let iterator = 0;
  while(iterator < subString.length){
    comparableString = comparableString + resultedBinary[substringIndex];
    substringIndex++;
    iterator++;
  }
  subString === comparableString && occuranceCounter++;
  console.log("comparableString", comparableString);
}

console.log("occuranceCounter =>", occuranceCounter);
console.log("number =>", number, "resultedBinary =>", resultedBinary);
console.log(inputNumber, subString, "count => 1");
