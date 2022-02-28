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

export const Check = (check, answer) => {
  if (toString(check) === toString(answer) && answer.length !== 0) {
    console.log('Correct!');
  }
  else {
    console.log(`'${answer}' is wrong answer. Correct answer was '${check}' `);
    console.log(`Let's try again, ${name}!`);
    return -1;
  }
  return 0;
};
