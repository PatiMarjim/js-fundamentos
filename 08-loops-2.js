/*while con bombi:
var k=10
while(j<k && k>j) {
    console.log(`Valores: ${j} ${k}`);
    j+=1;
    k-=1;
}*/

// WHILE; solo tiene un argumento, que comparación vamos a utilizar para seguir haciendo el bluce: descvenjatadas: la var de inicio e incremento de la var la controlamos nosotras y la comparacion con var externas y es mas dificil su uso. Usar mejor for para trabajar.

var count = 0;
while (count <=10){
console.log(`la cuenta va por ${count}`);

count++;
// count +=1
// count = count + 1
}

console.log('--------')
var negativeCount = 10;
while (negativeCount >= 0){
console.log(`la cuenta va por ${negativeCount}`);

negativeCount--;
}

var timesRepeated = 0;
var sentence = 'La programación me gusta';
var i = 0;
while (i < sentence.length) { 
    if (sentence[i] === 'm') {
        timesRepeated += 1;
    }
    i++;

}

// for (var i = 0; i < sentence.length; i++) {
// if (sentence[i] === 'o') {
//     timesRepeated += 1;

// }
// }

console.log(`La letra "m" se ha repetido ${timesRepeated} veces`);

