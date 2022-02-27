import readlineSync from "readline-sync";
import Chek from "../src/check.js";

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




        score=Chek(check,answer,name,score);
    }
    console.log(`Congratulations, ${name}!`);
};
export default progression;