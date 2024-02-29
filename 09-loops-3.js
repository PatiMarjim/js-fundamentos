// DO WHILE
var timesRepeated = 0;
var sentence = 'La programación me gusta';
var i = 0;

do {
    if (sentence[i] === 'm') {
        timesRepeated += 1;
    }
    i++;
} while (i < sentence.length)

// while (i < sentence.length) { 
//     if (sentence[i] === 'm') {
//         timesRepeated += 1;
//     }
//     i++;
// }
console.log(`La letra "m" se ha repetido ${timesRepeated} veces`);

var i = 0;

do {
    // haremos aquí el código
    // cambiamos el valor inicial al final de cada loop
    i += 1;
} while (i >10);