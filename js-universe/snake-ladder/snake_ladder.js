const ROWS = 10;
const COLUMNS = 10;
const SNAKES = [12, 25, 50, 86, 98, 77, 47];
const LADDER = [14, 21, 48, 8, 34];
let isVictory = false;

function pad(value, length = 4) {
  return value.toString().padStart(length, '_');
}

function addNumber(col, row) {
  return row % 2 === 0 ? col + 1 + row * 10 : COLUMNS - col + row * 10;
}

function addItem(array, positions, emoji) {
  for (let index = 0; index < positions.length; index++) {
    const [row, col] = findCoOrds(positions[index]);
    array[row][col] = emoji;
  }
}

function addSnakesAndLadders(array) {
  addItem(array, SNAKES, '_🐍_');
  addItem(array, LADDER, '_🪜_');
}

function makeRow(size, row) {
  const array = [];

  for (let index = 0; index < size; index++) {
    array.push('____');
  }
  return array;
}

function displayBoard(array) {
  const board = [];
  board.unshift(' ____'.repeat(array[0].length));

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

function addPrevious(row, col, char, previous) {
  if (('_🐍_,_🪜_,____'.includes(char))) {
    return [row, col, char];
  }

  return [row, col, previous[2]];
}

function modifyPosition(row, col, array) {
  let value = addNumber(col, ROWS - row - 1);
  switch (array[row][col]) {
    case '_🐍_': value = Math.floor(value / 2); break;
    case '_🪜_': value = value * 2; break;
    default: return [row, col];
  }
  return findCoOrds(value);
}

function checkForItem(array, prev, row, col, emoji, index) {
  const [nRow, nCol] = modifyPosition(row, col, array);
  prev[index] = addPrevious(nRow, nCol, array[nRow][nCol], prev[(index + 1) % 2]);
  array[nRow][nCol] = emoji;
  return addNumber(nCol, ROWS - nRow - 1);
}

function makeMove(prev, index, emoji, diceNumber, position, array) {
  position[0] += position[0] + diceNumber <= 100 ? diceNumber : 0;
  const previous = prev[index];
  array[previous[0]][previous[1]] = previous[2];
  const [row, col] = findCoOrds(position[0]);
  console.clear();
  position[0] = checkForItem(array, prev, row, col, emoji, index);
  position[0] === 100 && (isVictory = !isVictory);
  displayBoard(array);
  delay();
}

function playTheGame(array, players) {
  const length = players.length;
  const emojis = ['_⛹🏼‍♂️__', '_⛹🏻__'];
  let index = 0;
  const positions = [[0], [0]];
  const previous = [[0, 0, '____'], [0, 0, '____']];

  while (!isVictory) {
    const actIndex = index % length;
    const emoji = emojis[actIndex];
    const diceNumber = generateRandom();
    makeMove(previous, actIndex, emoji, diceNumber, positions[actIndex], array);
    index++;
  }
  console.log(players[(index - 1) % 2], 'is the winner', emojis[(index - 1) % 2]);
}

function playSnakeAndLadder() {
  const array = generateBoard();
  addSnakesAndLadders(array);
  displayBoard(array);
  const players = assignPlayers();
  playTheGame(array, players);
}

playSnakeAndLadder();
