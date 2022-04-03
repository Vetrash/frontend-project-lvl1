import readlineSync from 'readline-sync';

const welcomeText = 'Welcome to the Brain Games!';
const numberOfRounds = 3;

const Ending = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const Check = (name, check, answer) => {
  if (String(check) === answer && answer.length !== 0) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer. Correct answer was '${check}' `);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const question = (task) => {
  console.log(`Question: ${task}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const engineGame = (preparation, mainQuestion) => {
  console.log(welcomeText);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(mainQuestion);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const { task, check } = preparation();
    const answer = question(task); // узнали ответ игрока
    const checket = Check(name, check, answer); // проверили верность ответа
    if (checket === false) { return; }// окончили игру если ответ был неверный
  }
  Ending(name); // окончили игру если все ответы были верные
};
export default engineGame;
