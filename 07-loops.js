// Le da vueltas al mismo contenido hasta que nosotros pongamos un límite.
// FOR - se ponen 3(var) cosas separadas por ;

// var 1
// un valor máximo que queremos alcanzar
// var 2
// tiene que ser un acumulador, acumular valores e ir creciendo cone el bucle

// for (valor inicial; comparación; operación tras cada loop){
//     contenido
// }
var j=0


for (var i = 0; i < 5; i++ ) {
    //console.log(`El valor de i es: ${i}`);
    j += 1
    console.log(`El valor de j es: ${j}`);
}

// // var i, incremental, pocos casos donde se utiliza una var como letra.
// //  i = i + 1 es igual a i++

// for (var a = 10; a >= 0; a-- ) {
//     console.log(`El valor de a es: ${a}`);

// }

// for (var x = 10; x >= 0; x = x -= 2){
//     console.log(`El valor de x es: ${x}`);
// }



// Vamos a contar el número de veces que se repite una letra dentro de un texto.

var timesRepeated = 0;
var sentence = 'Los bucles son importantes en programación';
// console.log(sentence.length);

// console.log(sentence[5]);

for (var i = 0; i < sentence.length; i++) {
if (sentence[i] === 'o') {
    timesRepeated += 1;

}
}

console.log(`La letra "o" se ha repetido ${timesRepeated} veces`);

