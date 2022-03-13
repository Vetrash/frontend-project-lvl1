import readlineSync from 'readline-sync';

let name = '';
export const Greeting = (mainQuestion) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(mainQuestion);
  return true;
};

export const Ending = () => {
  console.log(`Congratulations, ${name}!`);
};

export const Check = (check, answer) => {
  if (String(check) === answer && answer.length !== 0) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer. Correct answer was '${check}' `);
    console.log(`Let's try again, ${name}!`);
    return -1;
  }
  return 0;
};

export const question = (task) => {
  console.log(`Question: ${task}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
