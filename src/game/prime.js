import startGame from '../index.js';
import randomNum from '../random.js';

const prime = () => {
  const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNum(2, 100);
    let check = 'yes';
    for (let n = 2; n < number1; n += 1) {
      if (number1 % n === 0) {
        check = 'no';
        break;
      }
    }
    const task = number1;
    const answer = { task, check };
    answers.push(answer);
  }
  startGame(answers, mainQuestion);
};
export default prime;
