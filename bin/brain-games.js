#!/usr/bin/env node

import Greeting from "../src/cli.js";
import Even from "./brain-even.js";
import Calc from "./brain-calc.js";
import Gcd from "./brain-gcd.js";
import Progression from "./brain-progression.js";
import Prime from "./brain-prime.js";
console.log("Welcome to the Brain Games!");
const name=Greeting();// выполняем приветсвие и получаем имя игрока
//Блок игр (начало)
Even(name); //игра на четность
Calc(name); //игра на мат.операции
Gcd(name); //игра на общий делитель
Progression(name); //игра на прогресиию
Prime(name); //игра на простое число
//Блок игр (конец)


