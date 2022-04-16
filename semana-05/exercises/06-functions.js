console.log('--EXERCISE 06: FUNCTIONS');
/*Crear una función suma que reciba dos valores numéricos
y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable
en la consola del navegador.*/
console.log('Exercise 6.A:');
var result1;
function suma(first, second){
    return first + second;
}
result1 = suma(1, 5);
console.log('Result:' + result1);

/*A la función suma anterior, agregarle una validación para
controlar si alguno de los parámetros no es un número, mostrar
una alerta aclarando que uno de los parámetros tiene error y
retornar el valor NaN como resultado.*/
console.log('Exercise 6.B:');
function suma2(first, second){
    if(!isNaN(first) && !isNaN(second)){
        return first + second;
    }
    else
    {
        window.alert('Ex B: \nOne of the inputs is not a number'
        + '\nFirst is not a number: ' + isNaN(first) + ' ' 
        + '\nSecond is not a number: ' + isNaN(second))
    }
}
result2 = suma2('b', 5);
console.log('Result:' + result2);

/*Crear una función validate integer que reciba un número como
parámetro y devuelva verdadero si es un número entero.*/
console.log('Exercise 6.C:');
function validateInteger(number){
    if(number.toString().indexOf('.') == -1){
        number = parseInt(number);
        return Number.isInteger(number);
    }
    else
    {
        number = parseInt(number);
        return false;
    }
}

result3 = validateInteger(10);
console.log('Result:' + result3);

/*A la función suma del ejercicio 6b) agregarle una llamada que
valide que los números sean enteros. En caso que haya decimales
mostrar un alerta con el error y retorna el número convertido a
entero (redondeado).*/
console.log('Exercise 6.D:');
function suma4(first, second){
    if(!isNaN(first) && !isNaN(second)){
        if(validateInteger(first)){
            if(validateInteger(second)){
                return first + second;
            }
            else
            {
                window.alert('Ex D: \nSecond value is not an integer')
                return parseInt(second.toFixed());
            }
        }
        else
        {
            window.alert('Ex D: \nFirst value is not an integer')
            return parseInt(first.toFixed());
        }
    }
    else
    {
        window.alert('Ex D: \nOne of the inputs is not a number'
        + '\nFirst is not a number: ' + isNaN(first) + ' ' 
        + '\nSecond is not a number: ' + isNaN(second))
    }
}
result4 = suma4(4.6, 9);
console.log('Result:' + result4);

/*Convertir la validación del ejercicio 6d) en una función separada
y llamarla dentro de la función suma probando que todo siga funcionando
igual.*/
console.log('Exercise 6.E:');
function suma5(first, second){
    first = validateInputs(first);   
    second = validateInputs(second);
    return first + second;
}
function validateInputs(number){
    if(!isNaN(number)){
        if(validateInteger(number)){
            return number;
        }
        else
        {
            window.alert('Ex E: \nValue is not an integer')
            return parseInt(number.toFixed());
        }
    }
    else
    {
        window.alert('Ex E: \nInput is not a number' + isNaN(first))
    }
}
result5 = suma5(5, 4.8)
console.log('Result:' + result5);