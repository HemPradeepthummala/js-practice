const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

function findIndex(char, list = ALPHABETS) {
  return list.indexOf(char);
}

function encipher([key, message]) {
  let encipheredText = '';
  for (let index = 0; index < message.length; index++) {
    const keyIndex = findIndex(key[index % key.length]);
    const charIndex = findIndex(message[index]);
    encipheredText += ALPHABETS[(keyIndex + charIndex) % 26];
  }
  return encipheredText;
}

console.log(encipher(Deno.args));
