console.log('--EXERCISE 01: VARIABLES AND OPERATORS');
var result;
/* a. Crear dos variables numéricas y utilizar el operador suma para guardar 
el valor de la suma de ambos números en una 3er variable.*/
console.log('Exercise 1.a:');
var n1 = 1;
var n2 = 2;
result = null;
result = n1 + n2;

console.log('Result:' + result);

/*Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
console.log('Exercise 1.b:');
var s1 = 'hello';
var s2 = 'world';
result = null;
result = s1 + s2;

console.log('Result:' + result);

/*Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado de la suma en una
3er variable (utilizar length).*/
console.log('Exercise 1.c:');
var s1 = 'Kingdom';
var s2 = 'Hearts';
result = s1.length + s2.length;

console.log('Result:' + result);