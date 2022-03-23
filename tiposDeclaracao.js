// function declaration
function soma (x, y){
    return x + y
} // A função declarada desta forma, pode ser utilizada antes da linha da funcão (O JavaScript interpreta sempre primeiro as funções, depois o código)

// function expression
const sub = function (x, y){
    return x - y
}

console.log(sub(3, 4))

// named function
const mult = function mult(x, t){
    return x * y
}

console.log(mult(4,3))