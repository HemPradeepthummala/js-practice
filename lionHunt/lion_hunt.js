const input =  "L  ZL Z";
const space = " ";
let distance = 0;
let output = -1;
let animal = input[0];
for (let index = 0; index < input.length; index++) {
  if (input[index] === " ") {
    distance++;
  }
  if (input[index] === animal) {
    distance = 0;
  }
  if (input[index] !== animal && input[index] !== space) {
    if (output === -1 || output > distance) {
      output = distance;
      distance = 0;
      animal = input[index];
    }
  }
}
console.log(distance, "=> distance", output, "=> output");
