#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting, Ending, Check } from '../src/cli.js';

Greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let score = 0;

for (let i = 0; i < 3; i += 1) {
  const number1 = Math.floor(Math.random() * 98) + 2;
  console.log(`Question: ${number1}`);
  const answer = readlineSync.question('Your answer: ');
  let check = 'yes';
  for (let n = 2; n < number1; n += 1) {
    if (number1 % n === 0) {
      check = 'no';
      break;
    }
  }
  score = Check(check, answer);
  if (score === -1) { break; }
}
if (score !== -1) { Ending(); }
