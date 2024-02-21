var two = 2;
// representación de números, sin comillas.
var twoWithDecimals = 2.5; 
// las comillas en nuúmeros en js se utilizan puntos.
var negative = -2;
// operaciones con números: sumar, restar, dividir, multiplicar, el resto, potencias y cualquier tipo de cálculo, por ej facturas, iva, irpf...(valores tipo número, NO string)

// SUMA
var sum = 3 + 2;
console.log(sum);
// Los nums se pueden concatenar con strings de cara al console.log.
console.log(`la suma vale: ${sum}`);

// RESTA
var substract = 8 - 3;
console.log(`la resta vale: ${substract}`);

// MULTIPLICACIÓN
var multiply = 8 * 10;
console.log(`la multiplicación vale: ${multiply}`);
// DIVISIÓN
var divide = 350 / 25;
console.log(`la división es: ${divide}`)

// DIVISION CON DECIMALES
var divideWithDecimals = 25 / 4;
console.log(`la división con decimales es: ${divideWithDecimals}`)

// RESTO, se calcula número entero.
var rest =  25 % 4;
console.log(`El resto vale: ${rest}`);

// POTENCIAS
var power = 5**2;
console.log(`La potencia vale: ${power}`);

// Conjunto de operaciones, orden de parentesis claro para el resultado.
var firstCalculus = 2 * 4 + 5;
var complexCalculus = 2 + 2 * 4 + 5 / 5 + 6;
console.log(complexCalculus);

var firstCalculus = 2 * 4 + 5;
var complexCalculus = 2 + firstCalculus / 5 + 6;
console.log(complexCalculus);

// Numero en formato string y  number, da texto, es decir, seria string,  no da número, pero se puede solucionar con el añadido de un + pegado al string, lo convierte en número, pero no es una forma elegante de hacerlo.
var numberAsString = '30';
var number = 35;
console.log(numberAsString + number);
console.log (number + numberAsString);
console.log(number + +numberAsString);
// // Da texto, no habría suma.

const numberAsNumber = Number (numberAsString);
console.log(number + numberAsNumber);

// parseInt
// parseFloat 
// son también dos funciones más para crear número

// NaN (Not a Number). Si esto aparece es que hay alguna liada en el código. Se puede ver si un número es NaN o no con los condicionales-
var notValidNumber = Number('_');
console.log(`El número no válido es: ${notValidNumber}`);

var salary = 1000 * notValidNumber;
// aseguararme NaN / condicionales
console.log(`Es el número NaN? ${Number.isNaN(notValidNumber)}`);

console.log(`El salario es: ${salary}`);
console.log