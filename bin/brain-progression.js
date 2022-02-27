import readlineSync from "readline-sync";


const progression = (name) => {

    console.log("What number is missing in the progression?");
    let score = 0;

    while (score <= 2) {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 20);
        const lengthArray = Math.floor(Math.random() * 5) + 5;
        const enigmaIndex = Math.floor(Math.random() * lengthArray);
        let myArray = [number1];
        for (let i = 0; i < lengthArray; i++) {
            myArray.push(myArray[i] + number2);
        }
        let check = myArray[enigmaIndex];
        myArray[enigmaIndex] = "..";
        console.log(`Question: ${myArray.join(" ")}`);
        const answer = readlineSync.question("Your answer: ");




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
export default progression;