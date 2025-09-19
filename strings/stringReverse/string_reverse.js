const inputString = "thoughtWorks";
let reversedString = "";

while(reversedString.length < inputString.length){
    let lengthOfReversedString = reversedString.length + 1;
    reversedString = reversedString + inputString[inputString.length - lengthOfReversedString];
}

console.log(inputString, "=>", reversedString);
