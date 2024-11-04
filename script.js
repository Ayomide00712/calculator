let btns = document.querySelectorAll(".num-button");
let allbtns = document.querySelectorAll(".button");
let resultsBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");

let btnSpread = [...btns];
let allbtnsSpread = [...allbtns];

btnSpread.forEach((button, i) => {
    button.addEventListener("click", () => {
        if(resultsBox.innerHTML == "0"){
            resultsBox.innerHTML = "";
        }
        let value = btns[i].innerHTML;
        resultsBox.innerHTML +=  value;
    });
});
function evaluate(fn) {
    return new Function('return ' + fn)();
};

total.addEventListener('click', ()=>{
    let allInputs = resultsBox.innerHTML;

    resultsBox.innerHTML = evaluate(allInputs);

    console.log(evaluate(allInputs))
});
clearBtn.addEventListener('click', () =>{
    resultsBox.innerHTML = "0";
})
