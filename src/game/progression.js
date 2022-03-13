#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Greeting, Ending, Check, question } from '../cli.js';
import randomNum from '../random.js';

const progression = () => {
  Greeting('What number is missing in the progression?');
  let score = 0;

  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNum(0, 100);
    const number2 = randomNum(0, 20);
    const lengthArray = randomNum(5, 10);
    const enigmaIndex = randomNum(0, lengthArray);
    const myArray = [number1];
    for (let n = 0; n < lengthArray; n += 1) {
      myArray.push(myArray[n] + number2);
    }
    const check = myArray[enigmaIndex];
    myArray[enigmaIndex] = '..';
    const answer = question(myArray.join(' ')); // задать вопрос и вернуть ответ
    score = Check(check, answer); // проверить коректность ответа
    if (score === -1) { break; } // определяем не верный ответ и заканчиваем игру
  }
  if (score !== -1) { Ending(); }
};
export default progression;
