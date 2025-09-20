const inputString = "   L Z Z L";
const space = " ";
let distance = 0;
let output = -1;
let duplicatedString = "";

for (let index = 0; index < inputString.length; index++) {
  if (inputString[index] !== space || duplicatedString !== "") {
    duplicatedString = duplicatedString + inputString[index];
  }
}

let animal = duplicatedString[0];

for (let index = 0; index < duplicatedString.length; index++) {
  duplicatedString[index] === space && distance++;
  duplicatedString[index] === animal && (distance = 0);
  if (duplicatedString[index] !== animal && duplicatedString[index] !== space) {
    let compareOutput = output === -1 || output > distance;
    if (compareOutput) {
      output = distance;
      distance = 0;
      animal = duplicatedString[index];
    }
  }
}

console.log("input :", inputString, "output :", output);
