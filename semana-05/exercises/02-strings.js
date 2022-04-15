console.log('--EXERCISE 02: STRINGS');
/*Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('Exercise 2.a:');
var s1a = 'impervious';
var resultA = s1a.toUpperCase();
console.log('Result:' + resultA);

/*Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los primeros 5 caracteres 
guardando el resultado en una nueva variable (utilizar substring).*/
console.log('Exercise 2.b:');
var s1b = 'transactional';
var resultB = s1b.substring(0, 4);
console.log('Result:' + resultB);

/*Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres guardando 
el resultado en una nueva variable (utilizar substring).*/
console.log('Exercise 2.c:');
var s1c = 'astrophysical';
var resultC = s1c.substring(10, 13);
console.log('Result:' + resultC);

/*Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayúscula y las
demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('Exercise 2.d:');
var s1d = 'anthropomorphic';
var resultD = s1d.substring(0,1).toUpperCase() + s1d.substring(1,15).toLowerCase();
console.log('Result:' + resultD);

/*Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio 
en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('Exercise 2.e:');
var s1e = 'building bricks';
var resultE = s1e.indexOf(' ');
console.log('Result:' + resultE);

/*Crear una variable de tipo string con al menos 2 palabras 
largas (10 caracteres y algún espacio entre medio). Utilizar 
los métodos de los ejercicios anteriores para generar un nuevo 
string que tenga la primera letra de ambas palabras en mayúscula 
y las demás letras en minúscula (utilizar indexOf, substring, 
toUpperCase, toLowerCase y el operador +).*/
console.log('Exercise 1.f:');
var s1f = 'dependable craftswoman';
var index = s1f.indexOf(' ') + 1;
var resultF = s1f.substring(0,1).toUpperCase() + 
    s1f.substring(1, index).toLowerCase() + 
    s1f.substring(index, index + 1 ).toUpperCase() +
    s1f.substring(index + 2, s1f.length);
    
console.log('Result:' + resultF);