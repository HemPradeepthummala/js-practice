const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

function findCipherIndex(position, shiftKey) {
  return (position + shiftKey) % ALPHABETS.length;
}

function encrypt(message, shiftKey, length = 0) {
  let cipherText = '';
  for (let index = 0; index < message.length; index++) {
    const position = ALPHABETS.indexOf(message[index]) + length;
    const cipherIndex = findCipherIndex(position, shiftKey);
    cipherText += ALPHABETS[cipherIndex];
  }
  return cipherText;
}

function decrypt(message, shiftKey) {
  return encrypt(message, -shiftKey, 26);
}

function performEncryption([mode, message, shiftKey]) {
  if (mode.toLowerCase() === 'e') {
    return encrypt(message, shiftKey);
  }
  if (mode.toLowerCase() === 'd') {
    return decrypt(message, shiftKey);
  }
  return 'invalid Inputs';
}

const msg = prompt('enter the message without spaces');
const key = parseInt(prompt('enter the key'));
const mode = prompt('enter \n e:encryption\n d: decryption')

console.log(performEncryption([mode, msg, key]));
