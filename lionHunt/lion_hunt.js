const inputString = "L Z   L L  LZ";
const space = " ";
let distance = 0;
let output = -1;
let stringWithNoLeadingSpaces = "";

for (let index = 0; index < inputString.length; index++) {
  if (inputString[index] !== space || stringWithNoLeadingSpaces !== "") {
    stringWithNoLeadingSpaces = stringWithNoLeadingSpaces + inputString[index];
  }
}

let animal = stringWithNoLeadingSpaces[0];

for (let index = 0; index < stringWithNoLeadingSpaces.length; index++) {
  if (stringWithNoLeadingSpaces[index] === space){
    distance++;
  } 
  if (stringWithNoLeadingSpaces[index] === animal){
    (distance = 0);
  }
  if (stringWithNoLeadingSpaces[index] !== animal && stringWithNoLeadingSpaces[index] !== space) {
    let compareOutput = (output === -1 || output > distance);
    if (compareOutput) {
      output = distance;
    }
    animal = stringWithNoLeadingSpaces[index];
    distance = 0;
  }
}

console.log("input :", inputString, "output :", output);
