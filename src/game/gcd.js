import engineGame from '../index.js';
import randomNum from '../random.js';

const gcdCheck = (num1, num2) => {
  let minNum = num2;
  let solution = 0;
  if ((num1 - num2) < 0) { minNum = num1; }
  for (let n = 1; n <= minNum; n += 1) {
    if (num1 % n === 0 && num2 % n === 0) { solution = n; }
  }
  return solution;
};

const gcdPreparation = () => {
  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  const check = gcdCheck(number1, number2);
  const task = `${number1} ${number2}`;
  const answer = { task, check };
  return answer;
};

const gcd = () => {
  const mainQuestion = 'Find the greatest common divisor of given numbers.';
  engineGame(gcdPreparation, mainQuestion);
};
export default gcd;
