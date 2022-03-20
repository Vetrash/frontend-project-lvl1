import randomNum from '../random.js';
import startGame from '../index.js';

const calc = () => {
  const mainQuestion = 'What is the result of the expression?';
  const operant = ['+', '-', '*', '/'];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNum(0, 100);
    const number2 = randomNum(0, 100);
    const operantIndex = randomNum(0, 3);
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
      case 3:
        check = number1 / number2;
        break;
      default:
        check = number1 + number2;
        break;
    }
    const task = `${number1} ${operant[operantIndex]} ${number2}`;
    const answer = { task, check };
    answers.push(answer);
  }
  startGame(answers, mainQuestion);
};
export default calc;
