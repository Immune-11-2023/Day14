// forEach solo recorre, devuelve undefined
// map siempre tendremos que poner un return, devolvera un array con la misma longitud con lo que le devolvamos
// filter siempre nos devolvera un array con solo los elementos a los cuales le devolvamos un true

// const arrayTarget = [];
// data.forEach((element) => {
//   if (element.target === 'frontend') {
//     arrayTarget.push(element);
//   }
// });
// console.log(arrayTarget);

const dataFiltered = data.filter((element) => {
  console.log(element.target === 'frontend');
  // if (element.target === 'frontend') {
  //   return true
  // }
  // return false
  return element.target === 'frontend';
});

/**
 * [{
    id: 1,
    title: 'React',
    target: 'frontend',
    tags: ['ui', 'jsx', 'virtual-dom', 'components', 'props', 'state'],
    jsx: true
  },
    {
    id: 2,
    title: 'Angular',
    target: 'frontend',
    tags: ['ui', 'ts', 'state'],
    jsx: false
  }],
 */

const newData = data.map((e) => {
  // debugger;
  // if (e.tags.includes('jsx')) {
  //   e.jsx = true;
  // } else {
  //   e.jsx = false;
  // }
  // e.jsx = e.tags.includes('jsx');
  // return e;
});

// console.log(newData);

// reduce

// const addNumbers = numeros.reduce((addNumber, number) => {
//   const returnAcc = addNumber + number;
//   return returnAcc;
// }, 0);

// const arrayTarget = [];
// data.forEach((element) => {
//   if (element.target === 'frontend') {
//     arrayTarget.push(element);
//   }
// });
// console.log(arrayTarget);

// const arrayTarget = data.reduce((acc, element) => {
//   if (element.target === 'frontend') {
//     acc.push(element);
//   }
//   return acc;
// }, [])

// console.log(arrayTarget);

const numeros = [-5, -3, -7, -1, -8, -6, -2, -9, -4, -7, -5];

// const maxNumberReduce = numeros.reduce((maxNumber, number) => {
//   if (maxNumber > number) {
//     return maxNumber;
//   } else {
//     return number;
//   }
// });

const text =
  'Lorem fistrum apetecan pecador tiene musho peligro hasta luego Lucas condemor por la gloria de mi madre ese hombree diodenoo.';

const char = 'a';

const numberWords = text.split('').reduce((n, letter) => {
  if (/[a-z]/gi.test(letter)) {
    return n;
  } else {
    n++;
    return n;
  }
}, 0);

// console.log(numberWords);

// numeros.reduce(() => {})

// let addNumber = 0;
// numeros.forEach((number) => {
//   addNumber += number;
// });

// find

// const dataFinded = data.find((element, index, array) => {
//   debugger
//   if (element.target === 'devops') {
//     return true;
//   } else {
//     return false
//   }
// }); // true | false
// debugger;
// console.log(dataFinded);

const x = numeros.findLast((number) => {
  if (number > -5) {
    return true;
  } else {
    return false
  }
})

console.log(x);

// some

// const numeros = [-5, -3, -7, -1, -8, -6, -2, -9, -4, -7, -5];

const someMaxZero = numeros.some((element, index, array) => {
  if (element > -2) {
    return true
  }
  return false;
});

console.log('some ', someMaxZero);



const everyMaxZero = numeros.every((element, index, array) => {
  return element < -2;
});

console.log('every' ,everyMaxZero);

// every


const arraytext = text.split(' ');

const largWord = arraytext.reduce((acc, element, index, array) => {
  if (acc.length > element.length) {
    return acc;
  } else {
    return element;
  }
})

// console.log(largWord);

const charsText = text.split('');

const countChar = charsText.reduce((acc, char) => {
  if (!acc[char]) {
    acc[char] = 1
  } else {
    acc[char] = acc[char] + 1
  }
  return acc;
}, {})

console.log(countChar);
