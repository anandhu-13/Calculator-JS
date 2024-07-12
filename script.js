

function displayNumber(event){

    let val = event.target.value


    let operators=["+","-","*","/","."]

    let currentExpLastChar=result.value.slice(-1)

    if (operators.includes(currentExpLastChar) && operators.includes(val)){
        result.value=result.value.slice(0,-1)+val

    }
    else{
        result.value += val
    }

}




function clearBox(){
    result.value=""

}


function evaluateExpression(){

    let currentExpression = result.value
    let output = eval(currentExpression)
    result.value = output
}


function backspace(){
    let val=result.value.slice(0,-1)
    result.value=val
}


