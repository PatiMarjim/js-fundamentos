// Calcular la media de una colección de notas ERROR
const getAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    //sum = sum + score;
    sum += score
  }
  return Math.round(sum/scores.length);
};

const marks = [10, 4, 6, 9, 4, 6, 1];
const average = getAverage(marks);


console.log(`La media de las notas es : ${average}`);

const marks2 = [30, 4, 6, 9, 4, 6, 1];
const average2 = getAverage(marks2);


console.log(`La media de las notas es : ${average2}`);

// Filtrar los números que sean pares.
const getEvenNumber = (numbers) => {
    const evenNumbers = []
    
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers [i];
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }

    return evenNumbers;
}

const evenNumbers = getEvenNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(`Los números pares son :`, evenNumbers);