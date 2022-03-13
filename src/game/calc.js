import {
  Greeting, Ending, Check, question,
} from '../cli.js';
import randomNum from '../random.js';

const calc = () => {
  Greeting('What is the result of the expression?');
  let score = 0;
  const operant = ['+', '-', '*', '/'];
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
    const answer = question(`${number1} ${operant[operantIndex]} ${number2}`); // задать вопрос и вернуть ответ
    score = Check(check, answer); // проверить коректность ответа
    if (score === -1) { break; } // определяем не верный ответ и заканчиваем игру
  }
  if (score !== -1) { Ending(); } // заканчиваем игру поздравлениями
};
export default calc;
