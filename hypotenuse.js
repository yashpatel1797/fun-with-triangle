const btnSubmit = document.querySelector(".btn-submit");
const lenInput = document.querySelectorAll(".len-input");
const output = document.querySelector(".output");


function calculateSumOfSquare(a, b){
    return a*a + b*b;
}

function calculateHypotenuse(){
    if(Number(lenInput[0].value) > 0 && Number(lenInput[1].value) > 0){
        let sumOfSquare = calculateSumOfSquare(Number(lenInput[0].value), Number(lenInput[1].value));
        sumOfSquare = Math.sqrt(sumOfSquare);
        output.innerText = "Hypotenuse length = " + sumOfSquare;
    } else{
        output.innerText = "Enter Positive value";
    }
}

btnSubmit.addEventListener("click", calculateHypotenuse);