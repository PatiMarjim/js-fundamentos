// Función
function sum (num1, num2) {
    return num1 + num2;
}

var totalSum = sum (4, 3);
console.log(`La suma total vale: ${totalSum}`);

// Función ANÓNIMA
var substract = function (a, b) {
    return a - b;
}

console.log(`La resta vale; ${substract(10,6)}`);

// Función Flecha (Arrow function)
var multiply = (a, b) => {
    return  a * b; 
}
console.log(`La multiplicación vale: ${multiply(8,9)}`);


// Función con return implícito (solo cuando hay un return de cosas)
var multiply = (a, b) => a * b; 
console.log(`La multiplicación vale: ${multiply(8,9)}`);
