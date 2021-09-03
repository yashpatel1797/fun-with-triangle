const btnSubmit = document.querySelector(".btn-submit");
const lenInput = document.querySelectorAll(".len-input");
const output = document.querySelector(".output");

function calculateAreaOfTriangle(){
    if(Number(lenInput[0].value) > 0 && Number(lenInput[1].value) > 0){
        let area = (1/2) * Number(lenInput[0].value) * Number(lenInput[1].value);
        output.innerText = "Area of triangle is= " + area;
    } else {
        output.innerText = "Enter Positive value";
    }
}

btnSubmit.addEventListener("click", calculateAreaOfTriangle);