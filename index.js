const calculateButton = document.querySelector("button");
let error = document.querySelector("#errorText");
calculateButton.addEventListener("click",(e) => {
    calculate();
})

function calculate(){
    
    error.innerText = " ";
    let expression = document.querySelector("textarea").value;
    console.log(expression);
    let result;
    try{
        result = eval(expression);
        console.log(result);
    }catch(err){
        result = "Syntax Error !!";
    }
    if(result === undefined || result === NaN || result == null){
        result = "Syntax Error !!";
        error.innerText = "Please type mathematical Equations only."
    }
    document.querySelector("#result").innerText = ("Result is "+result);
}
