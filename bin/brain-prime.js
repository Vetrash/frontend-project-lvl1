import readlineSync from "readline-sync";


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

        if (check === answer) {
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
export default prime;