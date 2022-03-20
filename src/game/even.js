import startGame from '../index.js';
import randomNum from '../random.js';

const even = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const number = randomNum(0, 100);
    let numberEven = 'no';
    if (number % 2 === 0) { numberEven = 'yes'; }
    const task = number;
    const check = numberEven;
    const answer = { task, check };
    answers.push(answer);
  }
  startGame(answers, mainQuestion);
};
export default even;
