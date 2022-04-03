import primePreparation from '../gamePreparation/primePreparation.js';
import engineGame from '../index.js';

const prime = () => {
  const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engineGame(primePreparation, mainQuestion);
};
export default prime;
