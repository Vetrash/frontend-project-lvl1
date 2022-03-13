#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting, Ending, Check, question } from '../cli.js';
import randomNum from '../random.js';

const even = () => {
  Greeting('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = randomNum(0, 100);
    let check;
    if (number % 2 === 0) { check = 'yes'; } else { check = 'no'; }
    const answer = question(number); // задать вопрос и вернуть ответ
    score = Check(check, answer); // проверить коректность ответа
    if (score === -1) { break; }
  }
  if (score !== -1) { Ending(); }
};
export default even;
