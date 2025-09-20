const input = "  hem";
const space = " ";
let duplicatedString = "";

input[0] !== space && (duplicatedString = input[0]);
console.log(duplicatedString);

input[1] !== space && (duplicatedString = input[1]);
console.log(duplicatedString);

input[2] !== space && (duplicatedString = input[2]);
console.log(duplicatedString);

console.log(input, "=> 'hem'");
