const input = "L  Z";
const space = " ";
let distance = 0;
let output = -1;
let animal = input[0];
for (let i = 0; i < input.length; i++) {
  if (input[i] === " ") {
    distance++;
  }
}
console.log(distance);
