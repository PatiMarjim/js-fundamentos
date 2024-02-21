// Son una representación true o false de algo. Cuando es true significa que está encendido; false, apagado.Pero normalmente en nuestro código no suele aparecer un true o false aleatorio, si no que es el resultado de una comparación de algo

var trueVar = true;
var falseVar = false;
console.log(trueVar);

trueVar = false;
console.log(trueVar);

// var  pati = 5 el igual simple asigna un valor a una variable.
// 5 == 5 el doble igual, true o false, nos dicen si los elementos tienen el mismo valor una vez interpretados
console.log('Igual doble solo número: '+ (5 == 5)); 
// IGUAL DOBLE: Compara que el valor sea el mismo. 
console.log('Igual doble con string y number: '+ ('5' == 5)); 
// IGUAL DOBLE: Compara que el valor sea el mismo, pero no diferencia el tipo de variable, 
// esto puede ser un problema, por eso es recomendado utilizar triple igual. Es similar, compara que valgan lo mismo, pero con la diferencia de que compara el mismo valor y el mismo tipo de variable, es decir, por ejemplo que sean número o string.

console.log('Igual triple solo número: '+ (5 === 5)); 
console.log('Igual triple con string y number: '+ ('5' === 5)); 

// Se puede utilizar también el > para ver si el num es mayor que otro.

 console.log('Es 2 mayor que 3? ' + (2 > 3));
 console.log('Es 2 mayor que 3? ' + (3 < 2));
 console.log('Es 3 mayor que 2? ' + (3 > 2));
 console.log('Es 3 mayor que 2? ' + (2 < 3));
 console.log('Es 3 mayor o igual que 3? ' + (3 >= 3));
//  si hay duda de que un valor sea string, lo transformo a Number.
console.log('Es 3 mayor o igual que 3? ' + (3 >= Number(3)));

var isSameName = 'juan' === 'Juan';
console.log('Son el mismo nombre? ' + isSameName);
// se puede hacer también con strings, en este caso no a mayúsculas (eso puede pasar en alguna plataforma con la condición de que no haya diferencia entre miniscula o mayuscula)

// Se puede convertir a booleans, como?? 
// Truthy (posibles verdaderos, todos los valores que contengan un valor válido, que ocupe esapacio)
console.log('Es 2 truthy?' + Boolean(2));
console.log('Es PMBA truthy?' + Boolean('pmba'));
console.log('Es true truthy?' + Boolean(true));

// Falsy: todas aquellas var que contengan valor que no sea verdadero de cara al codigo, que no tengan contenido dentro.
console.log('Es 0 falsy', Boolean(0));
// Porque el 0 no tiene contenido dentro, no representa valor.
console.log('Es un string vacío falsy?', Boolean(''));
console.log('Es un false falsy?', Boolean(false));


// var surname; es undefined (no hay valor dentro)
var surname;
console.log('Es surname falsy?', Boolean(surname));

var surname = null;
console.log('Es surname falsy?', Boolean(surname));
