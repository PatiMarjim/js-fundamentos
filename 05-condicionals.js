// // var age = 24;
// // var canParticipate = false;

// // if (age < 30) {
// //     canParticipate = true }

// // console.log(`Puede participar el usuario? ${canParticipate}`);

// var yearsToRenew = 0;
// var driverAge = 77;

// // 18 o más, y tiene 50 o menos => 10 años
// // más de 50 y menos o igual a 75 => 5
// // más de 75 años => 1

// if (driverAge >= 18 && driverAge <=50) {
//     yearsToRenew = 10;

// }

// if( driverAge > 50 && driverAge <= 75) {
//     yearsToRenew = 5;

// }

// if ( driverAge > 75) {
//     yearsToRenew = 1;

// }

// console.log(`Se tiene que renovar el carnet cada ${yearsToRenew}`);

// IF ELSE

// var myName = 'Pati';
// if (myName === 'Pati') {
//     console.log('Eres la alumna');
// } else {
//     console.log('Eres una profe');
// }

var time = 9000;
var record = '';
// trabajar con tiempo por minisegundos

// if (time < 8000 ){
//     record = 'World Record';
// }

// if (time < 10000 ){
//     record = 'Olympic Record';
// }

// if (time < 12000 ){
//     record = 'Personal Best';
// }

// console.log( `El record es: ${record}`);

// el orden es importante, porque va a determinar como es comporta la aplicación,porque en este caso aunque hiciera 7000 seguiría siendo Personal Best como record. Por eso hay que ordenar los IF así:

if (time < 12000) {
  record = 'Personal Best';
}

if (time < 10000) {
  record = 'Olympic Record';
}
if (time < 8000) {
  record = 'World Record';
}

console.log(`El record es: ${record}`);

// SI no quieres ordenar, o no sabes que condición exacta se da, o si hay un orden especificio, para curarnos en salud ordenamos como al principio Y METEMEOS ELSE.

if (time < 8000) {
  record = 'World Record';
} else {
  if (time < 10000) {
    record = 'Olympic Record';
  } else {
    if (time < 12000) {
      record = 'Personal Best';
    }
  }
}

console.log(`El record es: ${record}`);

// Se pueden hacer ELSE especificos para que quede más bonito el código,

var time = 40000;
var record = ' ';
if (time < 8000) {
  record = 'World Record';
} else if (time < 10000) {
  record = 'Olympic Record';
} else if (time < 12000) {
  record = 'Personal Best';
} else {
  record = 'No record';
}

console.log(`El record es: ${record}`);

// Varias formas de comprobar condiciones, menor o igual, mayor o igual, ===.
// && ( y OR OPERATOR )doble ampersand que es Y = encandena condiciones.

var city = 'Barcelona';
var hasCar = false;
//  if ( city ==='Madrid' && hasCar === false) {
//     console.log('Va en metro') ;
//  }

//  if (city === 'Madrid' && hasCar === true) {
//     console.log ('Puede ir en coche o metro') ;
//  }

//  ! si metemos exclamación cambia de false a true.

if ((city === 'Madrid' || city === 'Barcelona') && hasCar === false) {
  console.log('Va en metro');
}

if ((city === 'Madrid' || city === 'Barcelona') && hasCar === true) {
  console.log('Puede ir en coche o metro');
}
//  Si hacemos un OR en un && tenemos que poner OR entre parentésis para que compruebe primero esa acción.
