import readlineSync from "readline-sync";
const calc = (name) => {

    console.log("What is the result of the expression?");
    let score = 0;
    const operant=["+" , "-" , "*" , "/"];
    while (score <= 2) {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 100);
        const operantIndex=Math.floor(Math.random() * 3);
        console.log(`Question: ${number1} ${operant[operantIndex]} ${number2}`);
        const answer = readlineSync.question("Your answer: ");
        let check;
        switch(operantIndex){
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
export default calc;