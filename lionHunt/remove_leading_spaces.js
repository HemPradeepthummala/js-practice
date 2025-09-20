const inputString = "  he m";
const leadingCharacter = " ";
let duplicatedString = "";

for (let index = 0; index < inputString.length; index++) {
  if (inputString[index] !== leadingCharacter || duplicatedString !== "") {
    duplicatedString = duplicatedString + inputString[index];
  }
}

console.log("j",inputString, "=>","j",duplicatedString);
