import engineGame from '../index.js';
import randomNum from '../random.js';

const isEven = (num) => {
  if (num % 2 === 0) { return true; }
  return false;
};

const evenPreparation = () => {
  const number = randomNum(1, 100);
  let numberEven = 'no';
  const even = isEven(number);
  if (even) { numberEven = 'yes'; }
  const task = number;
  const check = numberEven;
  const answer = { task, check };
  return answer;
};
const even = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  engineGame(evenPreparation, mainQuestion);
};
export default even;
