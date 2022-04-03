import randomNum from '../random.js';

const gcdPreparation = () => {
  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  let check;
  let minNum = number2;
  if ((number1 - number2) < 0) { minNum = number1; }
  for (let n = 1; n <= minNum; n += 1) {
    if (number1 % n === 0 && number2 % n === 0) { check = n; }
  }
  const task = `${number1} ${number2}`;
  const answer = { task, check };
  return answer;
};
export default gcdPreparation;
