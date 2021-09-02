const btnTriangle = document.querySelector(".btn-triangle");
const angleInput = document.querySelectorAll(".angle-input");
const output = document.querySelector(".output");

function calculateSum(input1, input2,  input3){
    return input1+input2+input3;
}

function isTriangle(){
    const sumOfAngle = calculateSum(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));

    if(sumOfAngle === 180){
        showMessage("This is triangle");
    } else {
        showMessage("This is not triablge");
    }
}

btnTriangle.addEventListener("click", isTriangle);

function showMessage(msg){
    output.innerText = msg;
}