import engineGame from '../index.js';
import progressionPreparation from './progressionPreparation.js';

const progression = () => {
  const mainQuestion = 'What number is missing in the progression?';
  engineGame(progressionPreparation, mainQuestion);
};
export default progression;
