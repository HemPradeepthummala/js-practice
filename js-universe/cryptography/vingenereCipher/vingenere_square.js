const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

function generateVingenereSquare(alphabets) {
  const square = [];
  square.push('_'.repeat(53));
  for (let row = 1; row <= 26; row++) {
    const line = [];
    for (let pos = 0; pos < 26; pos++) {
      line.push(alphabets[(row + pos) % 26]);
    }
    square.push("|" + line.join("|") + '|');
  }
  return square.join('\n');
}

console.log(generateVingenereSquare(ALPHABETS));
