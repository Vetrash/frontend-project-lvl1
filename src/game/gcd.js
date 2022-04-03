import gcdPreparation from '../gamePreparation/gcdPreparation.js';
import engineGame from '../index.js';

const gcd = () => {
  const mainQuestion = 'Find the greatest common divisor of given numbers.';
  engineGame(gcdPreparation, mainQuestion);
};
export default gcd;
