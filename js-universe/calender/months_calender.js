const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function findFirstDay(month, year) {
  const m = parseInt(month);
  const d = 1;
  const k = parseInt(year.slice(2));
  const j = parseInt(year.slice(0, 2));
  const h = Math.floor(d + 13 * (m + 1) / 5 + k + (k / 4) + (j / 4) - 2 * j);
  return (h - 1) % 7;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function calculateTotalDays(year, month = 12) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  return Math.floor((month + month / 8) % 2) + 30;
}

function printCalender(day, totalDays) {
  const lines = [DAYS.join(' ')];
  let line = DAYS;
  let currentDay = 1;
  line.fill('  ', 0, 7);
  for (let week = 1; week <= 5; week++) {
    for (let i = day; i < line.length && currentDay <= totalDays; i++) {
      line[i] = currentDay.toString().padStart(2);
      currentDay++;
    }
    lines.push(line.join(' '));
    line = line.fill(' ')
    day = 0;
  }

  return lines.join('\n');
}

function generateMonth([month, year]) {
  const day = findFirstDay(month, year);
  const totalDays = calculateTotalDays(parseInt(year), parseInt(month));
  return printCalender(day, totalDays);
}

console.log(generateMonth(['10', '2025']));
