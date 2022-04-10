import engineGame from '../index.js';
import randomNum from '../random.js';

const progressionPreparation = () => {
  const number1 = randomNum(0, 100);
  const number2 = randomNum(0, 20);
  const lengthArray = randomNum(5, 10);
  const enigmaIndex = randomNum(0, lengthArray);
  const myArray = [number1];
  for (let n = 0; n < lengthArray; n += 1) {
    myArray.push(myArray[n] + number2);
  }
  const check = myArray[enigmaIndex];
  myArray[enigmaIndex] = '..';
  const task = myArray.join(' ');
  const answer = { task, check };
  return answer;
};

const progression = () => {
  const mainQuestion = 'What number is missing in the progression?';
  engineGame(progressionPreparation, mainQuestion);
};
export default progression;
