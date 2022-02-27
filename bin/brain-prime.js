import readlineSync from "readline-sync";
import Chek from "../src/check.js";

const prime = (name) => {

    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
    let score = 0;

    while (score <= 2) {
        const number1 = Math.floor(Math.random() * 98) + 2;
        console.log(`Question: ${number1}`);
        const answer = readlineSync.question("Your answer: ");
        let check = "yes";
        for (let i = 2; i < number1; i++) {
            if (number1 % i == 0) {
                check = "no";
                break;
            }
        }

        score=Chek(check,answer,name,score);
    }
    console.log(`Congratulations, ${name}!`);
};
export default prime;