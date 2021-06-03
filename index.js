const calculateButton = document.querySelector("button");
calculateButton.addEventListener("click",(e) => {
    calculate();
})

function calculate(){
    let expression = document.querySelector("textarea").value;
    console.log(expression)
    let result = eval(expression);
    document.querySelector("#result").innerText = ("Result is "+result);
}
