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
    // array.push(addNumber(index, row));
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
  // const delimiters = ['|', '/', '\\'];
  for (let i = 0; i < 10000000_000; i++);
}

function generateRandom(min = 1, max = 7) {
  return Math.floor(Math.random() * (max - min) + min);
}

function findCoOrds(value) {
  const row = Math.floor((value - 1) / ROWS);
  const columnValue = Math.floor(((value - 1) % 10));
  const column = row % 2 === 0 ? columnValue : Math.floor(COLUMNS - columnValue - 1);
  return [row , column];
}

function makeMove(player, emoji, diceNumber, position, array) {
  position[0] += position[0] + diceNumber <= 100 ? diceNumber : 0;
  const [row, col] = findCoOrds(position[0]);
  console.log(array[row][col]);
}

function playTheGame(array, players) {
  const length = players.length;
  const emojis = ['_⛹🏼‍♂️_', '_⛹🏻_'];
  let index = 0;
  const positions = [[0], [0]];
  const isFirstMove = [true, true];
  while (index<12) {
    const player = players[index % length];
    const emoji = emojis[index % length];
    const diceNumber = generateRandom();
    // if (!isFirstMove[index % length] || diceNumber === 6) {
      const victory = makeMove(player, emoji, diceNumber, positions[index % length], array);
    // }
    index++;
  }
}

function playSnakeAndLadder() {
  const array = generateBoard();
  const players = assignPlayers();
  playTheGame(array, players);
}

playSnakeAndLadder();
