const btnSubmit = document.querySelector(".btn-submit");
const lenInput = document.querySelectorAll(".len-input");
const output = document.querySelector(".output");

function calculateAreaOfTriangle(){
    let area = (1/2) * Number(lenInput[0].value) * Number(lenInput[1].value);
    output.innerText = "Area of triangle is= " + area;
}

btnSubmit.addEventListener("click", calculateAreaOfTriangle);