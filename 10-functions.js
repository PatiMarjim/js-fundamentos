// crear función
function getPriceByCity (city){
    // return 1 el codigo no se ejecuta, dará ese resultado siempre
    // var city =  'Valencia';
    var price = 0;
    if (city === 'Madrid') {
        price =10;
        // return 1 si está dentro del if si se ejecuta, a no ser que se entre en el if,entones ya no se seguiría evaluando el código, una forma de cerrar la función por completo
    } else if (city === 'Valencia') {
        price = 5;
    } else {
        price =1;
    }
    return  price;
}

// invocar funcion 'nombre ()'
// getPriceByCity ()
// ej 'hola' .toUpperCase()

var priceInMadrid = getPriceByCity ('Madrid')
var priceInValencia = getPriceByCity ('Valencia')
var priceInCadiz = getPriceByCity ('Cadiz')

console.log(`El precio en Madrid es : ${priceInMadrid} `);
console.log(`El precio en Valencia es : ${priceInValencia} `);
console.log(`El precio en Cadiz es : ${priceInCadiz} `);

// var priceByCity = getPriceByCity ('price < 8');
// console.log(`El precio es : ${priceByCity} `);
