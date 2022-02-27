import readlineSync from "readline-sync";
import Chek from "../src/check.js";
const calc = (name) => {

    console.log("What is the result of the expression?");
    let score = 0;
    const operant = ["+", "-", "*", "/"];
    while (score <= 2) {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 100);
        const operantIndex = Math.floor(Math.random() * 3);
        console.log(`Question: ${number1} ${operant[operantIndex]} ${number2}`);
        const answer = readlineSync.question("Your answer: ");
        let check;
        switch (operantIndex) {
            case 0:
                check = number1 + number2;
                break;
            case 1:
                check = number1 - number2;
                break;
            case 2:
                check = number1 * number2;
                break;
            case 3:
                check = number1 / number2;
                break;
        }
       score=Chek(check,answer,name,score);
        
    }
    console.log(`Congratulations, ${name}!`);
};
export default calc;