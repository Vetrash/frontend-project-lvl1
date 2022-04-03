import randomNum from '../random.js';
import isPrime from '../isPrime.js';

const primePreparation = () => {
  const number1 = randomNum(2, 100);
  let check = 'yes';
  const prime = isPrime(number1);
  if (!prime) { check = 'no'; }
  const task = number1;
  const answer = { task, check };
  return answer;
};
export default primePreparation;
