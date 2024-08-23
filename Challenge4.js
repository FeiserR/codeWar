function tribonacci(signature, n) {
  let sequence = signature;
  if (n < 4) {
    for (let i = 3; i > n; i--) {
      sequence.pop();
    }
  }

  for (let i = 0; i < n - 3; i++) {
    const sequenceEnd = sequence.filter(
      (number, index, array) => index > array.length - 4
    );
    sequence.push(sequenceEnd.reduce((a, b) => a + b));
  }
  return sequence;
}

const result = tribonacci([1, 1, 1], 5);

console.log(result);
