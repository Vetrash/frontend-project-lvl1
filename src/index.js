import readlineSync from 'readline-sync';

const welcomeText = 'Welcome to the Brain Games!';

const Ending = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const Check = (name, check, answer) => {
  if (String(check) === answer && answer.length !== 0) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer. Correct answer was '${check}' `);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  return true;
};

const question = (task) => {
  console.log(`Question: ${task}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const startGame = (answers, mainQuestion) => {
  console.log(welcomeText);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(mainQuestion);

  for (let i = 0; i < 3; i += 1) {
    const answer = question(answers[i].task); // узнали ответ игрока
    const checket = Check(name, answers[i].check, answer); // проверили верность ответа
    if (checket === true && i === 2) {
      Ending(name); // окончили игру если все ответы были верные
    }
    if (checket === false) { break; }// окончили игру если ответ был неверный
  }
};
export default startGame;
