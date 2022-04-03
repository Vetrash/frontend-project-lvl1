const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) { return false; }
  }
  return true;
};
export default isPrime;
