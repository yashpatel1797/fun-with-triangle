const btnSubmit = document.querySelector(".btn-submit");
const lenInput = document.querySelectorAll(".len-input");
const output = document.querySelector(".output");


function calculateSumOfSquare(a, b){
    return a*a + b*b;
}

function calculateHypotenuse(){
    let sumOfSquare = calculateSumOfSquare(Number(lenInput[0].value), Number(lenInput[1].value));
    sumOfSquare = Math.sqrt(sumOfSquare);
    output.innerText = "Hypotenuse length = " + sumOfSquare;
}

btnSubmit.addEventListener("click", calculateHypotenuse);