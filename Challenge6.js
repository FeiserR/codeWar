function isPrime(num) {
  if (num < 2) return false;

  const Numbers = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    Numbers.push(i);
  }

  return Numbers.map((element) => num / element).every(
    (element) => !Number.isInteger(element)
  );
}

console.log(isPrime(6));
