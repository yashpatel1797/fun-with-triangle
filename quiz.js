const formQuiz = document.querySelector(".form-quiz");
const submitAnswer = document.querySelector(".btn-submit");
const output = document.querySelector(".output");

const answer = ["90", "right angled", "2 congruent sides", "Equilateral"];

function checkAnswer(){
    let score = 0;
    let index = 0;
    const result = new FormData(formQuiz);
    for(let value of result.values()){
        if(value === answer[index++]){
            score++;
        }
    }
    output.innerText = "Score is: " + score;
}
submitAnswer.addEventListener("click", checkAnswer)