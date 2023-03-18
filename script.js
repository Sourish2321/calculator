let operator = ''
let value1 = 0
let value2 = 0

function operate(a,b){
    if (operator == '+') {
        return a+b
    }
    if (operator == '-'){
        return a-b
    }
    if (operator == '/'){
        return a/b
    }
    if (operator == '*'){
        return a*b
    }
    else {
        return null
    }
}