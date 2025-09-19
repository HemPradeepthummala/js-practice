let factorial = 1;
let currentTerm = 0;
const finalTerm = 10;

while (currentTerm <= finalTerm) {
    if (currentTerm !== 0) {
        factorial = factorial * currentTerm;
    }
    console.log("current", currentTerm, "factorial", factorial);
    currentTerm = currentTerm + 1;
}
