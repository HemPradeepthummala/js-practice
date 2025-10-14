const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

function adjustMonthandYear([month, year]) {
  if (month <= 2) {
    return [14 + (month - 2), (year - 1).toString()];
  }

  return [month, year];
}

function findDay(h) {
  if (h < 0) {
    const quotient = Math.abs(h) % 7;
    const remainder = 7 - quotient;
    return remainder - 1;
  }
  return (h - 1) % 7;
}

function findFirstDay(month, year) {
  const [adMonth, adYear] = adjustMonthandYear([month, year]);
  const m = parseInt(adMonth);
  const d = 1;
  const k = parseInt(adYear.slice(2));
  const j = parseInt(adYear.slice(0, 2));
  const h = Math.floor(d + 13 * (m + 1) / 5 + k + Math.floor(k / 4) + Math.floor(j / 4) - 2 * j);
  return findDay(h);
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function calculateTotalDays(year, month = 12) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  return Math.floor((month + month / 8)) % 2 + 30;
}

function generateWeek(totalDays, currentDay, day = 0) {
  const line = '  ,'.repeat(6).split(',');
  let index = day;

  while (index < 7 && currentDay <= totalDays) {
    line[index] = (currentDay++).toString().padStart(2);
    index++;
  }
  return line.join(' ');
}

function generateCalender(year) {
  const array = [];
  const firstDays = [];
  const totalDays = [];

  for (let month = 1; month <= 3; month++) {
    firstDays.push(findFirstDay(month, year));
    totalDays.push(calculateTotalDays(year, month));
  }
  const currentDay = [0, 0, 0];
  for (let week = 0; week <= 6; week++) {
    const weeks = [];
    for (let index = 0; index < 3; index++) {
      weeks.push(generateWeek(totalDays[index], currentDay[index] + 1, firstDays[index]));
      currentDay[index] += 7 - firstDays[index];
    }
    firstDays.fill(0, 0, 3);
    array.push(weeks.join('\t'));
  }

  return array.join('\n');
}

console.log(generateCalender('2025'))
