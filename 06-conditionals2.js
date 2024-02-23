// if (){}
// if () else {}
// if () else if{} else {}

// SWITCH (para casos simples, de asginación de una suma por ej, no comparar varias cosas y etc)- NOS PERMITE ENVIAR UN POARAMETRO DE ENTRADA Y SE VA A EVALUAR EN DIF SITUAIONES, Y SI DA TRUE O FALSE ENTRAMOS EN UN CASO U OTRO

var price;
var city = 'Cadiz';

// if (city = 'Alicante') {
//     price = 0;
// } else if (city === 'Madrid') {
//     price = 15;
// }

// Puede llegar a ser un código MUUUY largo, por eso:

switch (city) {
  case 'Alicante':
    price = 10;
    break;
  case 'Madrid':
    price = 15;
    break;
  case 'Barcelona':
    price = 20;
    break;
  default:
    price = 8;
}

console.log(`El precio del metro para ${city} es de ${price} euros`);

// añadir BREAK para que una vez cumpla 1 condición no siga comprobando el resto.
