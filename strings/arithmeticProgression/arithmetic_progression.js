const limit = "........";
let resultedString = "";
let currentString = "";

while(currentString.length < limit.length) {
    currentString = currentString + limit[currentString.length];
    resultedString = resultedString + currentString;
    console.log(currentString, currentString.length, resultedString, resultedString.length);
}
