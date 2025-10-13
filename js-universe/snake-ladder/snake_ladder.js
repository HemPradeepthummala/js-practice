const ROWS = 10;
const COLUMNS = 10;
const SNAKES = [12, 25, 50, 86, 98, 77, 47];
const LADDER = [14, 21, 56, 8, 34];

function pad(value, length = 4) {
  return value.toString().padStart(length, '_')
}

function addItems(col, row) {
  const value = addNumber(col, row);
  if (SNAKES.includes(value)) {
    return '_🐍_';
  }
  if (LADDER.includes(value)) {
    return '_🪜_';
  }
  return '____';
}

function addNumber(col, row) {
  return row % 2 === 0 ? col + 1 + row * 10 : COLUMNS - col + row * 10;
}

function makeRow(size, row) {
  const array = [];

  for (let index = 0; index < size; index++) {
    array.push(addItems(index, row));
  }
  return array;
}

function displayBoard(array) {
  const board = [];
  board.unshift(' ____'.repeat(array[0].length))
  for (let row = 0; row < ROWS; row++) {
    board.push('|' + array[row].join('|') + '|');
  }
  console.log(board.join('\n'));
}

function generateBoard() {
  const array = [];
  for (let row = 0; row < ROWS; row++) {
    array.unshift(makeRow(COLUMNS, row));
  }

  displayBoard(array);
  return array;
}

function assignPlayers() {
  const players = [];
  players.push(prompt('enter name of Player 1'));
  players.push(prompt('enter name of Player 2'));
  return players;
}

function delay() {
  for (let i = 0; i < 10000000_000; i++);
}

function generateRandom(min = 1, max = 7) {
  return Math.floor(Math.random() * (max - min) + min);
}

function playTheGame(array, players) {
  const emojis = ['_⛹🏼‍♂️_', '_⛹🏻_'];
  let index = 0;
  const positions = [0, 0];
  while (true) {
    const player = players[index % players.length];
    const emoji = emojis[index % emojis.length];
    const char = prompt(`${player}, type R to roll the dice`);
    if (char.toLowerCase() !== 'r') {
      console.log(`Invalid, you entered ${char} please enter r or R`);
      continue;
    }
    const diceNumber = generateRandom();
  }
}

function playSnakeAndLadder() {
  const array = generateBoard();
  const players = assignPlayers();
  playTheGame(array, players);
}

playSnakeAndLadder();
