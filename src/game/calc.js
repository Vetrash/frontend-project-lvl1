import engineGame from '../index.js';
import randomNum from '../random.js';

const calcCheck = (num1, num2, operantIndex) => {
  let solution = 0;
  switch (operantIndex) {
    case 0:
      solution = num1 + num2;
      break;
    case 1:
      solution = num1 - num2;
      break;
    case 2:
      solution = num1 * num2;
      break;
    default:
      solution = num1 + num2;
      break;
  }
  return solution;
};

const calcPreparation = () => {
  const operant = ['+', '-', '*'];
  const number1 = randomNum(0, 100);
  const number2 = randomNum(0, 100);
  const operantIndex = randomNum(0, 2);
  const selectedOperant = operant[operantIndex];
  const check = calcCheck(number1, number2, operantIndex);
  const task = `${number1} ${selectedOperant} ${number2}`;
  const answer = { task, check };
  return answer;
};
const calc = () => {
  const mainQuestion = 'What is the result of the expression?';
  engineGame(calcPreparation, mainQuestion);
};
export default calc;
