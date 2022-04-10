import engineGame from '../index.js';
import evenPreparation from './evenPreparation.js';

const even = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  engineGame(evenPreparation, mainQuestion);
};
export default even;
