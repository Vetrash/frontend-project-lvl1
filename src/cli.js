import readlineSync from 'readline-sync';

let name = '';
export const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return true;
};

export const Ending = () => {
  console.log(`Congratulations, ${name}!`);
};

export const Check = (check, answer, score) => {
  if (check === answer) {
    console.log('Correct!');
    score += 1;
  }
  else {
    console.log(`'${answer}' is wrong answer. Correct answer was '${check}' `);
    console.log(`Let's try again, ${name}!`);
    score = -1;
  }
  return score;
};
