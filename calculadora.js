// Calculadora 

function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Impossível dividir por zero";
    }
}

console.log(adicionar(5, 3));
console.log(subtrair(5, 3));
console.log(multiplicar(5, 3));
console.log(adicionar(5, 3));