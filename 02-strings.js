
// var name = 'Pati';
// var surname = 'Martinez';
// //SIEMPRE COMILLA SIMPLE, SOLO EN CASO QUE NO SE PUEDA UTILIZAR, PONDREMOS COMILLA DOBLE ""
// var fullName = name + ' ' + surname;

// console.log (fullName)
// //Poner tanto nombre y suma es demasiado así que hay otra solución

var firstIngredient = "leche";
var secondIngredient = "arroz";
var thirdIngredient = "limón";
var fourthIngredient = "canela";

// Lista de ingredientes: leche, arroz, limón y canela

var recipe =
  "Lista de ingredientes: " +
  firstIngredient +
  ", " +
  secondIngredient +
  ", " +
  thirdIngredient +
  " y " +
  fourthIngredient + '.';

  console.log(recipe);
//   concatenar strings

//Hay una forma de expresar strings para poder interpolar variables dentro, es decir, dentor de un string inyecto una var en un sitio sin necesidad de sumar.
// \n para dar un salto de línea, no funciona darle al enter, se rompe el string, por es interpolamos, mediante el backticks. tilde invertida ``.

var recipeInterpolated = 
`Lista de ingredientes:
- ${firstIngredient},
- ${secondIngredient},
- ${thirdIngredient},
- ${fourthIngredient}.
`
console.log(recipeInterpolated);

// js no sabe que es var para interpolarla dentro de un string, para inyectarla dentro de mi string tengo que poner simbolo $ y {}.

// STRINGS se pueden definir a través de comillas dobles o simples, se pueden sumar igual, incluso mix. Los strings se pueden sumar entre si (incluso con números y booleans
// Utilizar comillas simples, palabra sencilla o conjunto palabras unido usamos comillas simples porq no vamos a interpolar nada. Si necesitamos inteprolar valore so el string es el resultado de interpolar otros strings usamos ``.

// toUpperCase
console.log('-------');
var car = 'Fiat';

var myCar = `Mi coche es un ${car.toUpperCase()}`;
console.log(myCar);

// FUNCIONES: conjunto de instrucciones que podemos llamar en cualquier momento y hace una serie de ooperaciones.
// Por ejemplo poner todo en mayúscula.

// toLocalLowerCase
var dog = 'CARLINO';
var myDog = `Mi perro es un ${dog.toLocaleLowerCase()}`;

console.log(myDog);

// trim, limpiar espacions de los extremos de un string. los espacios intermedios no los elimina.
var computerDescription = '   Ordenador muy potente con mucha RAM. ';
console.log(computerDescription.trim());

// slice,a  partir de que índice de un string quiero partir, ese índice es la posicion de un texto, una letra por ejemplo, y dónde termina también

var school = 'The PMBA' ; 
// var mySchool = school.slice(4) Aquí empieza desde la letra 4, y abajo empieza en esa letra y termina en esa (no inlclusive).
var mySchool = school.slice(4, 6)

console.log(mySchool);

