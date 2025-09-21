const inputNumber = 65;
const subString = "10";
let number = inputNumber;
let resultedBinary = "";

while (number !== 0) {
  let remainder = number % 2;
  resultedBinary = remainder + resultedBinary;
  remainder && (number -= 1);
  number = number / 2;
}

let occuranceCounter = 0;
let comparableString = "";
let index = 0;

comparableString = resultedBinary[index] + resultedBinary[++index];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[index] + resultedBinary[++index];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[index] + resultedBinary[++index];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[index] + resultedBinary[++index];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[index] + resultedBinary[++index];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[index] + resultedBinary[++index];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

console.log("occuranceCounter =>", occuranceCounter);
console.log("number =>", number, "resultedBinary =>", resultedBinary);
console.log(inputNumber, subString, "count => 1");
