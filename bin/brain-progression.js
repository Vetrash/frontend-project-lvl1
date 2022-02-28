#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting, Ending, Check } from '../src/cli.js';

Greeting();
console.log('What number is missing in the progression?');
let score = 0;

for (let i = 0; i < 3; i += 1) {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 20);
  const lengthArray = Math.floor(Math.random() * 5) + 5;
  const enigmaIndex = Math.floor(Math.random() * lengthArray);
  const myArray = [number1];
  for (let n = 0; n < lengthArray; n += 1) {
    myArray.push(myArray[i] + number2);
  }
  const check = myArray[enigmaIndex];
  myArray[enigmaIndex] = '..';
  console.log(`Question: ${myArray.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  score = Check(check, answer);
  if (score === -1) { break; }
}
if (score !== -1) { Ending(); }
