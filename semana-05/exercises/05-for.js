console.log('--EXERCISE 05: ARRAYS');
/*Crear un array que contenga 5 palabras y recorrer dicho 
array utilizando un bucle for de JavaScript para mostrar 
una alerta utilizando cada una de las palabras.*/
console.log('Exercise 5.a:');
var arr1= ['hola', 'que', 'tal', 'tu', 'como'];
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

/*Al array anterior convertir la primera letra de cada 
palabra en mayúscula y mostrar una alerta por cada palabra 
modificada.*/
console.log('Exercise 5.b:');
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i].substring(0,1).toUpperCase() + 
    arr1[i].substring(1, arr1[i].length).toLowerCase());
}
console.log('Result:' + result);

/*Crear una variable llamada “sentence” que tenga un string 
vacío, luego al array del punto a) recorrerlo con un bucle for
para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa.*/
console.log('Exercise 5.c:');
var sentence = '';
for(let i = 0; i < arr1.length; i++)
{
    sentence += arr1[i];
}
console.log('Result:' + sentence);

/*Crear una array vacío y con un bucle for de 10 repeticiones.
Llenar el array con el número de la repetición, es decir que al
final de la ejecución del bucle for debería haber 10 elementos
dentro del array, desde el número 0 hasta al número 9. Mostrar
por la consola del navegador el array final (utilizar console.log).*/
console.log('Exercise 5.d:');
var arr4 = [];
for(let i = 0; i < 10; i++)
{
    arr4[i] = i;
    console.log('Result:' + arr4[i]);
}

console.log('End Result: ' + arr4[0].toString() + arr4[1].toString() 
    + arr4[2].toString() + arr4[3].toString()
    + arr4[4].toString() + arr4[5].toString()
    + arr4[6].toString() + arr4[7].toString() 
    + arr4[8].toString() + arr4[9].toString())