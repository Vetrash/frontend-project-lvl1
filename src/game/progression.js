import engineGame from '../index.js';
import progressionPreparation from '../gamePreparation/progressionPreparation copy.js';

const progression = () => {
  const mainQuestion = 'What number is missing in the progression?';
  engineGame(progressionPreparation, mainQuestion);
};
export default progression;
