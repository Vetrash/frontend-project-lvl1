import engineGame from '../index.js';
import calcPreparation from '../gamePreparation/calcPreparation.js';

const calc = () => {
  const mainQuestion = 'What is the result of the expression?';
  engineGame(calcPreparation, mainQuestion);
};
export default calc;
