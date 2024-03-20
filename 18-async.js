
// const myName = 'Pati';
// console.log(`Mi nombre es: ${myName}`);


// // es un constructor/código asíncrono-promesa, tiene un callback, un código que se va a ejecutar cuando le toque.
// const promise = new Promise ( (resolve, reject) => {
//     console.log('promesa ejecutándose!');
//     reject ('La promesa se ha roto');
//     // resolve ('Resuelta!');
// }
// );
// // para reject:
// promise.catch((error) => {
//     console.log(error);
// });
// // para resolve:
// // promise.then((value) =>{
// //     console.log('La promesa se ha resuelto con el valor:', value)
// // })
// console.log(promise);
// // esto sería una promesa ejecutándose. Se tiene que resolver del todo o eliminar del todo.

// console.log('Este código se ejecuta antes que la Promise!');


const getAmountInBank = () => {
    // fetch es igual que new Promise
    const promise = new Promise ((resolve, reject) => {
        resolve (10000000);
        // reject ('El servidor no está disponible');
    });
    return promise;
};

getAmountInBank().then((amount)=> {
    console.log(`La cantidad que tenemos en el banco es ${amount}`);
    return `La cantidad es: ${amount}`;
})
.then ((message)=> {
    console.log('Esto es el segundo then');
    // .then ((message)=> {
    //     console.log(message);
})
.catch((error)=> {
    console.log(`Hay un error: ${error}`);
});


