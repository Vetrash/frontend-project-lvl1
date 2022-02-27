#!/usr/bin/env node
import readlineSync from "readline-sync";
import Chek from "../src/check.js";

const even = (name) => {
    
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    let score = 0;
    while (score <= 2) {
        const number = Math.floor(Math.random() * 100);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question("Your answer: ");
        let check;
        if (number % 2 === 0) { check = "yes"; }
        else { check = "no"; }

        score=Chek(check,answer,name,score);
    }
    console.log(`Congratulations, ${name}!`);
};
export default even;