console.log('--EXERCISE 03: ARRAYS');
/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", 
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log('Exercise 3.a:');
var year = ["Enero", "Febrero", "Marzo", 
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"]
console.log('Result:' + year[5] + year[11]);

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log('Exercise 3.b:');
result2 = [...year];
console.log('Result:' + result2.sort());

/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
console.log('Exercise 3.c:');
var result3 = [...year];
result3.unshift('2022');
result3.push('2023');
console.log('Result:' + result3);

/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log('Exercise 3.d:');
var result4 = [...year];
result4.shift();
result4.pop();
console.log('Result:' + result4);

/*Invertir el orden del array (utilizar reverse).*/
console.log('Exercise 3.e:');
var result5 = [...year];
console.log('Result:' + result5.reverse());

/*Unir todos los elementos del array en un único string donde 
cada mes este separado por un guión - (utilizar join).*/
console.log('Exercise 3.f:');
var result6 = [...year];
console.log('Result:' + result6.join('-'));

/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log('Exercise 3.g:');
var result7 = [...year];
console.log('Result:' + result7.slice(4, 11));