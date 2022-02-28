#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting, Ending, Check } from '../src/cli.js';

Greeting();
console.log('Find the greatest common divisor of given numbers.');
let score = 0;
for (let i = 0; i < 3; i += 1) {
  const number1 = Math.floor(Math.random() * 99) + 1;
  const number2 = Math.floor(Math.random() * 99) + 1;
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  let check;
  let minNum;
  if ((number1 - number2) < 0) { minNum = number1; } else { minNum = number2; }

  for (let n = 1; n <= minNum; n += 1) {
    if (number1 % n === 0 && number2 % n === 0) { check = n; }
  }

  score = Check(check, answer);
  if (score === -1) { break; }
}
if (score !== -1) { Ending(); }
