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

comparableString = resultedBinary[0] + resultedBinary[1];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[1] + resultedBinary[2];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[2] + resultedBinary[3];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[3] + resultedBinary[4];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[4] + resultedBinary[5];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

comparableString = resultedBinary[5] + resultedBinary[6];
subString === comparableString && occuranceCounter++;
console.log("comparableString",comparableString);

console.log("occuranceCounter =>", occuranceCounter);
console.log("number =>", number, "resultedBinary =>", resultedBinary);
console.log(inputNumber, subString, "count => 1");
