function nbYear(p0, percent, aug, p) {
  let populationSum = p0;
  let counter = 0
  for (; populationSum < p ; ) {
    counter++
    populationSum = Math.floor(populationSum + populationSum * percent / 100 + aug)
  }
  return counter;
}

console.log(nbYear(1000, 2, 50, 1200));
