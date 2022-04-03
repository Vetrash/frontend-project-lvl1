import randomNum from '../random.js';

const calcPreparation = () => {
  const operant = ['+', '-', '*'];
  const number1 = randomNum(0, 100);
  const number2 = randomNum(0, 100);
  const operantIndex = randomNum(0, 2);
  const selectedOperant = operant[operantIndex];
  let check;
  switch (operantIndex) {
    case 0:
      check = number1 + number2;
      break;
    case 1:
      check = number1 - number2;
      break;
    case 2:
      check = number1 * number2;
      break;
    default:
      check = number1 + number2;
      break;
  }
  const task = `${number1} ${selectedOperant} ${number2}`;
  const answer = { task, check };
  return answer;
};
export default calcPreparation;
