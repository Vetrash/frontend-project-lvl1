import engineGame from '../index.js';
import evenPreparation from '../gamePreparation/evenPreparation.js';

const even = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  engineGame(evenPreparation, mainQuestion);
};
export default even;
