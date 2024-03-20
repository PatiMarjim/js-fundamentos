const person = {
    name: 'Pati',
    surname: 'Martínez',

}

// const personName = person ['name'];
// const personName = person.name;
// se puede acceder a los objetos con puntos o corchetes, pero el punto solo  si conocemos el nombre de la variable.
console.log(`El nombre es: ${person.name} ${person.surname}`);

person ['age'] = 32;
console.log(`La persona tiene ${person.age} años`);

person ['city'] = 'Madrid';
delete person.city //(sino sabemos si existe la propiedad mejor poner corchetes)
console.log(`La persona vive en ${person.city}`);

person ['city'] = 'Madrid';
console.log (`Ahora la persona vive en ${person.city}`);
person.city = 'Cadiz';
console.log (`Ahora la persona vive en ${person.city}`);

// Claves dinámicas, dependen de una variable.

function getKey ( object, key) {
    return object [key];
    
}

const dynamicName = getKey (person, 'name');
const dynamicSurName = getKey (person, 'surname');
console.log(`Las claves dinámicas de person valen: ${dynamicName} ${dynamicSurName}`);


