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
var s1a = 'hello';
var s2a = 'world';
result = null;
result = s1a + s2a;
console.log('Result:' + result);

/*Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado de la suma en una
3er variable (utilizar length).*/
console.log('Exercise 1.c:');
var s1b = 'Kingdom';
var s2b = 'Hearts';
result = s1b.length + s2b.length;
console.log('Result:' + result);