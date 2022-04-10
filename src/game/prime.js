import engineGame from '../index.js';
import randomNum from '../random.js';

const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) { return false; }
  }
  return true;
};

const primePreparation = () => {
  const number1 = randomNum(2, 100);
  let check = 'yes';
  const prime = isPrime(number1);
  if (!prime) { check = 'no'; }
  const task = number1;
  const answer = { task, check };
  return answer;
};

const prime = () => {
  const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engineGame(primePreparation, mainQuestion);
};
export default prime;
