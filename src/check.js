
const check=(check,answer,name,score)=>{
    if (check == answer) {
        console.log("Correct!");
        score++;
    }
    else {
        console.log(`'${answer}' is wrong answer. Correct answer was '${check}' `);
        console.log(`Let's try again, ${name}!`);
        score = 0;
    }
    return score;
};
export default check;