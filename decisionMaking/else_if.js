const marksSecured = 100;

if (marksSecured < 30) {
    console.log("You're fail");
} else if (marksSecured < 60) {
    console.log("Average score");
} else if (marksSecured < 75) {
    console.log("Above average");
} else {
    console.log("great! Distinction");
}
