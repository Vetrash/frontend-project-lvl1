import startGame from '../index.js';
import randomNum from '../random.js';

const gcd = () => {
  const mainQuestion = 'Find the greatest common divisor of given numbers.';
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNum(1, 100);
    const number2 = randomNum(1, 100);
    let check;
    let minNum;
    if ((number1 - number2) < 0) { minNum = number1; } else { minNum = number2; }
    for (let n = 1; n <= minNum; n += 1) {
      if (number1 % n === 0 && number2 % n === 0) { check = n; }
    }
    const task = `${number1} ${number2}`;
    const answer = { task, check };
    answers.push(answer);
  }
  startGame(answers, mainQuestion);
};
export default gcd;
