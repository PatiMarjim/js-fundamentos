var name = 'Pati';
console.log('1. name:', name);

function changeName(newName) {
  name = newName;
}
console.log('2. name:', name);

changeName('Jorge');
console.log('3. name:', name);

// SCOOP- Alcance que tiene cada una de las cosas de nnuestro codigo. esta funcion tiene alcance global, la var tiene scoop gobal, ambas,la funcion puede acceder a la var, NO se recomienda hacer esto. habria que hacer:

function changeName(newName) {
  name = newName;
}
console.log('2. name:', name);

name = changeName('Jorge');
console.log('3. name:', name);
console.log('-----');

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function doOperation(operation, a, b) {
    
    //Esta variable hace shadowing a la funcion de scope globla
    // solo dentro de la función dooperation 
    // var sum = ( num1, num2) => num1 + num2;
  if (operation === 'sum') {
    return sum(a, b);
  } else if (operation === 'substract') {
    return substract(a, b);
  } else {
    return 'No operation';
  }
}

const result = doOperation('sum', 3, 4);
sum (1,2);
console.log (`El resultado es: ${result}`);