const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

function adjustMonthandYear([month, year]) {
  if (month <= 2) {
    return [14 + (month - 2), '' + (year - 1)];
  }

  return [month, year];
}

function findFirstDay(month, year) {
  const [adMonth, adYear] = adjustMonthandYear([month, year]);
  const m = parseInt(adMonth);
  const d = 1;
  const k = parseInt(adYear.slice(2));
  const j = parseInt(adYear.slice(0, 2));
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

function generateWeek(totalDays, currentDay, day = 0) {
  const line = '  ,'.repeat(6).split(',');
  let index = day;

  while (index < 7 && currentDay <= totalDays) {
    line[index] = (currentDay++).toString().padStart(2);
    index++;
  }
  return line.join(' ');
}

function printCalender(day, totalDays) {
  const lines = [DAYS.join(' ')];
  let currentDay = 7 - day;
  lines.push(generateWeek(totalDays, 1, day));

  for (let week = 1; week < 6; week++) {
    lines.push(generateWeek(totalDays, currentDay + 1));
    currentDay += 7;
  }

  return lines;;
}

function addMonth(month, year) {
  return (MONTHS[month - 1] + ' ' + year).padStart(16);
}

function generateMonth(month, year) {
  const day = findFirstDay(month, year);
  const totalDays = calculateTotalDays(parseInt(year), parseInt(month));
  const lines = printCalender(day, totalDays);
  lines.unshift(addMonth(month, year));
  console.log(lines.join('\n'));
}

function validateInputs([month, year]) {
  const isValidYear = year >= 0;
  const isValidString = (MONTHS.toString()).toLowerCase().includes(month.toLowerCase());
  const isValidCount = month * 1 > 0 && month * 1 <= 12;
  return isValidYear && (isValidString || isValidCount);
}

function generateCalender([month, year]) {
  if (validateInputs([month, year])) {
    return generateMonth(month, year);
  }
  console.log(`invalid Inputs [ ${month}, ${year}]`);
}

generateCalender(Deno.args);
