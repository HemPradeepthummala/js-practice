let result = 0;
let currentTerm = 1;
const finalTerm = 10;

while (currentTerm <= finalTerm) {
    result = result + currentTerm;
    console.log("current Term", currentTerm, "result", result);
    currentTerm = currentTerm + 1;
}
