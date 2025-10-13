const ROWS = 10;
const COLUMNS = 10;
const SNAKES = [12, 25, 50, 86, 98, 77, 47];
const LADDER = [14, 21, 56, 8, 34];

function pad(value, length = 4) {
  return value.toString().padStart(length, '_')
}

function addNumber(col, row) {
  return row % 2 === 0 ? col + 1 + row * 10 : COLUMNS - col + row * 10;
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
  for (let i = 0; i < 2000_000_000; i++);
}

function generateRandom(min = 1, max = 7) {
  return Math.floor(Math.random() * (max - min) + min);
}

function findCoOrds(value) {
  const row = Math.floor((value - 1) / ROWS);
  const columnValue = Math.floor(((value - 1) % 10));
  const col = row % 2 === 0 ? columnValue : Math.floor(COLUMNS - columnValue - 1);
  return [ROWS - row - 1, col];
}

function makeMove(prev, emoji, diceNumber, position, array) {
  position[0] += position[0] + diceNumber <= 100 ? diceNumber : 0;
  array[prev[0]][prev[1]] = prev[2];
  const [row, col] = findCoOrds(position[0]);
  prev[0] = row;
  prev[1] = col;
  prev[2] = array[row][col];
  array[row][col] = emoji;
  displayBoard(array);
  delay();
}

function playTheGame(array, players) {
  const length = players.length;
  const emojis = ['_⛹🏼‍♂️_', '_⛹🏻_'];
  let index = 0;
  const positions = [[0], [0]];
  const previous = [[0, 0, '____'], [0, 0, '____']];
  const isFirstMove = [true, true];
  while (index < 50) {
    const actIndex = index % length;
    const player = players[actIndex];
    const emoji = emojis[actIndex];
    const diceNumber = generateRandom();
    console.clear();
    makeMove(previous[actIndex], emoji, diceNumber, positions[actIndex], array);
    index++;
  }
}

function playSnakeAndLadder() {
  const array = generateBoard();
  displayBoard(array);
  const players = assignPlayers();
  playTheGame(array, players);
}

playSnakeAndLadder();
