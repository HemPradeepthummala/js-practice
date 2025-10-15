const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

function encipher(key, message) {
  const encipheredText = '';
  for (let index = 0; index < message.length; index++) {
    const keyChar = key[index % key.length];
    const msgIndex = ALPHABETS.indexOf(message[index]);
    const charIndex = ALPHABETS.indexOf(keyChar);
    const actIndex = ALPHABETS[(msgIndex + charIndex) % 26]
    console.log(keyChar, msgIndex, charIndex, actIndex);
  }
}

console.log(encipher('king','thesun'));
