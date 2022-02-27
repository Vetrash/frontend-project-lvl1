import readlineSync from "readline-sync";


const gcd = (name) => {

    console.log("Find the greatest common divisor of given numbers.");
    let score = 0;
    while (score <= 2) {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 100);
        console.log(`Question: ${number1} ${number2}`);
        const answer = readlineSync.question("Your answer: ");
        let check;
        let minNum;
        if ((number1 - number2) < 0) { minNum = number1; }
        else { minNum = number2; }

        for (let i = 1; i <= minNum; i++) {
            if (number1 % i === 0 && number2 % i === 0) { check = i; }
        }

        if (check == answer) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log(`'${answer}' is wrong answer. Correct answer was '${check}' `);
            console.log(`Let's try again, ${name}!`);
            score = 0;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
export default gcd;