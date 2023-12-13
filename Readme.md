## Día 14

En la lección de hoy hemos visto los métodos:

- reduce()
  - Que nos permite reducir un array a un único valor.
  - Recibe dos parámetros, el primero es una función que se ejecuta por cada elemento del array y el segundo es el valor inicial.
  - La función que se pasa como parámetro recibe cuatros parámetros, el primero es el valor acumulado, el segundo es el valor actual, el tercero es el índice del valor actual y el cuarto es el array sobre el que se está ejecutando la función.
  - El valor acumulado se va actualizando en cada iteración con el valor que devuelve la función.
  - El valor inicial es opcional, si no se pasa se toma el primer elemento del array como valor inicial y la función se ejecuta a partir del segundo elemento.
  - Ejemplo:
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    console.log(sum); // 15
    ```
- find()
  - Que nos permite encontrar un elemento en un array.
  - Recibe como parámetro una función que se ejecuta por cada elemento del array.
  - La función que se pasa como parámetro recibe tres parámetros, el primero es el valor actual, el segundo es el índice del valor actual y el tercero es el array sobre el que se está ejecutando la función.
  - La función debe devolver un booleano, true si el elemento cumple la condición y false si no la cumple.
  - Devuelve el primer elemento que cumple la condición o undefined si no hay ningún elemento que la cumpla.
  - Ejemplo:
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const evenNumber = numbers.find(number => number % 2 === 0);
    console.log(evenNumber); // 2
    ```
- some()
  - Que nos permite comprobar si algún elemento de un array cumple una condición.
  - Recibe como parámetro una función que se ejecuta por cada elemento del array.
  - La función que se pasa como parámetro recibe tres parámetros, el primero es el valor actual, el segundo es el índice del valor actual y el tercero es el array sobre el que se está ejecutando la función.
  - La función debe devolver un booleano, true si el elemento cumple la condición y false si no la cumple.
  - Devuelve true si algún elemento cumple la condición o false si ninguno la cumple.
  - Ejemplo:
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const hasEvenNumber = numbers.some(number => number % 2 === 0);
    console.log(hasEvenNumber); // true
    ```
- every()
  - Que nos permite comprobar si todos los elementos de un array cumplen una condición.
  - Recibe como parámetro una función que se ejecuta por cada elemento del array.
  - La función que se pasa como parámetro recibe tres parámetros, el primero es el valor actual, el segundo es el índice del valor actual y el tercero es el array sobre el que se está ejecutando la función.
  - La función debe devolver un booleano, true si el elemento cumple la condición y false si no la cumple.
  - Devuelve true si todos los elementos cumplen la condición o false si alguno no la cumple.
  - Ejemplo:
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const allEvenNumbers = numbers.every(number => number % 2 === 0);
    console.log(allEvenNumbers); // false
    ```