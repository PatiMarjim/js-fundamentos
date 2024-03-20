// Colección de variables. []
var marks = [10, 4, 6, 7, 9];

// acceso posición arrays. es un punto menos de la longitud.
marks [3]; 

// acceso longitud arrays.
marks.length; 

console.log(`El array marks tiene una longitud de : ${marks.length}`);

// Acceder al último elemento de un array
const length = marks.length; //7
const lastMark = marks [marks.length -1];
console.log(`La última nota es: ${lastMark}`);

// Reasignar UNA posicion del array sin reasignar todo.
// Poodemos mutar elementos en una posición del array.
marks[0] = 4;
console.log(`La nota del primer alumno es ${marks[0]}`);
// Usar const en array, puede ser mutable, pero no se reasigna completamente.

// Añadir elementos al principio del array:
// [10, 4, 6, 7, 9]
marks.unshift (3); //[3,10, 4, 6, 7, 9]
console.log('Unshift:',marks);

// Eliminar el primer elemento del array.
marks.shift();
console.log('Shift:', marks);

// // Añadir un elemento al final del array.
marks.push(7);
console.log('Push:', marks);

// Eliminar el ultimo elemento al final del array.
marks.pop();
console.log('Pop:', marks);

// Slice
const fruits = ['kiwi', 'melón', 'manzana'];
const firstFruit = fruits.slice (0, 1);
console.log(`El array con la primera fruta es:`, firstFruit); 
// preferimos no interporarlo y ponerlo con comas.
 
// copiar un array entero, solo con copy & slice.
const copyFruits = fruits.slice();
console.log('copy fruits array:', copyFruits);

// Hacer una referencia a un array.
const reassignedFruits = fruits;
reassignedFruits.push('Sandía');
console.log('Reassigned fruits:', reassignedFruits);
console.log('Fruits:', fruits);