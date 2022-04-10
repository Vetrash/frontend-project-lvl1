import engineGame from '../index.js';
import randomNum from '../random.js';

const gcdCheck = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcdCheck(num2, num1 % num2);
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
