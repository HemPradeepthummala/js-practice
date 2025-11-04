let numberOfTimes = 0;

function sort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
      numberOfTimes++;
    }
  }
  return data;
}

function generateRandomNumber(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower));
}

function randomData(length) {
  const data = [];
  for (let index = 0; index < length; index++) {
    data.push(generateRandomNumber(100, 500));
  }
  return data;
}

function benchmark(numberOfElements) {
  const data = randomData(numberOfElements);
  const _sortedData = sort(data);
  console.log(`${numberOfElements} | ${numberOfTimes}`)
  console.log('\n');
}

// benchmark(Deno.args[0]);

function simpleSort(data) {
  const sortedData = sort(data);
  return sortedData;
}

function meanOf(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }
  return sum / data.length;
}

function isOdd(number) {
  return number % 2 === 1;
}

function medianOf(data) {
  const n = data.length;
  if (isOdd(n)) {
    const index = Math.floor((n) / 2);
    return data[index];
  }
  const median = (data[Math.floor((n - 1) / 2)] + data[Math.floor(n / 2)]) / 2;
  return median;
}

function sqrOf(n) {
  return n * n;
}

function calculateVariance(mean, data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += sqrOf(data[index] - mean);
  }
  return sum / data.length;
}

function standardDevition() {
  const data = randomData(6);
  const sortedData = simpleSort(data.slice());
  const mean = meanOf(sortedData);
  const median = medianOf(sortedData);
  const variance = calculateVariance(mean, sortedData);
  console.log(`data is ${sortedData}, median is ${median} variance is ${variance} mean is ${mean}`);
  return Math.sqrt(variance);
}

console.log(standardDevition());
