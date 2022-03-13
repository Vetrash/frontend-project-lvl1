import {
  Greeting, Ending, Check, question,
} from '../cli.js';
import randomNum from '../random.js';

const prime = () => {
  Greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNum(2, 100);
    let check = 'yes';
    for (let n = 2; n < number1; n += 1) {
      if (number1 % n === 0) {
        check = 'no';
        break;
      }
    }
    const answer = question(number1); // задать вопрос и вернуть ответ
    score = Check(check, answer); // проверить коректность ответа
    if (score === -1) { break; } // определяем не верный ответ и заканчиваем игру
  }
  if (score !== -1) { Ending(); }
};
export default prime;
