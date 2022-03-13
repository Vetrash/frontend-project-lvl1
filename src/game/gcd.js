#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting, Ending, Check, question } from '../cli.js';
import randomNum from '../random.js';

const gcd = () => {
  Greeting('Find the greatest common divisor of given numbers.');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNum(1, 100);
    const number2 = randomNum(1, 100);
    let check;
    let minNum;
    if ((number1 - number2) < 0) { minNum = number1; } else { minNum = number2; }
    for (let n = 1; n <= minNum; n += 1) {
      if (number1 % n === 0 && number2 % n === 0) { check = n; }
    }
    const answer = question(`${number1} ${number2}`); // задать вопрос и вернуть ответ
    score = Check(check, answer); // проверить коректность ответа
    if (score === -1) { break; } // определяем не верный ответ и заканчиваем игру
  }
  if (score !== -1) { Ending(); }
};
export default gcd;
