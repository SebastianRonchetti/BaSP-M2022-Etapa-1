console.log('--EXERCISE 04: IF ELSE');
/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random()
, si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje 
“Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/
console.log('Exercise 4.a:');

var randA = Math.random();
if(randA <= 0,5){
    console.log('Result:' + 'greater than 0,5');
}else{
    console.log('Result:' + 'lower than 0,5');
}


/*Crear una variable “Age” que contenga un número entero entre 0 y 100
y muestre los siguientes mensajes de alerta:*/
/*“Bebe” si la edad es menor a 2 años;*/
/*“Niño” si la edad es entre 2 y 12 años;*/
/*“Adolescente” entre 13 y 19 años;*/
/*“Joven” entre 20 y 30 años;*/
/*“Adulto” entre 31 y 60 años;*/
/*“Adulto mayor” entre 61 y 75 años;*/
/*“Anciano” si es mayor a 75 años.*/
console.log('Exercise 4.b:');
function randomInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Age = randomInteger(0, 100);
console.log(Age)

if(Age < 2)
{
    console.log('Bebe')
}
else if(2 < Age && Age < 12)
{
    console.log('Niño')
}
else if(13 < Age && Age < 19)
{
    console.log('Adolescente')
}
else if(20 < Age && Age < 30)
{
    console.log('Joven')
}
else if(31 < Age && Age < 60)
{
    console.log('Adulto')
}
else if(61 < Age && Age < 75)
{
    console.log('Adulto mayor')
}
else if(75 < Age)
{
    console.log('Anciano')
}