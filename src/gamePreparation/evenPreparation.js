import randomNum from '../random.js';
import isEven from '../isEven.js';

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
export default evenPreparation;
