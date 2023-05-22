/*1- Escribir un programa que solicite la edad 
y si es mayor de 18 años 
mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido 
indicarlo en un mensaje.

let edad = prompt("Coloque su edad");

if (edad >= 18) {
    document.write("Ya puede conducir");
} else if (edad < 18) {
    document.write("Es menor de edad, no puede conducir ");
} else {
    document.write("No es numero valido");
}*/
    

/*2- Escribir un programa que solicite una nota 
(número) de 0  a 10. Luego mostrar la calificación en un alert
según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 
mostrar un mensaje de “número erróneo”. 
Si el número ingresado no es válido 
mostrar el mensaje “Introduce un número válido”. 

let nota = parseInt(prompt("Introduce una nota que sea entre el 0 y el 10"));

if (nota >= 0 || nota <= 10) {
    switch (nota) {
        case 0:
        case 1:
        case 2:
            alert("Muy deficiente");
            break;
        case 3:
        case 4:
            alert("Insuficiente");
            break;
        case 5:
        case 6:
            alert("Suficiente");
            break;
        case 7:
            alert("Llegaste");
            break;
        case 8:
        case 9:
            alert("Notable");
            break;
        case 10:
            alert("Sobresaliente");
            break;

        default:
            alert("Numero erroneo");
            break;
    }
} else {
    isNaN = nota;
    alert("Introduce un numero valido");
}

3- Realiza un script que pida cadenas de texto  
hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión-.

let texto = "";
let cadena = true; 
let concatenadas = "";

while (cadena) {
    texto = prompt("Ingrese una cadena de texto");
    console.log(texto)
    if (texto == null) {
        cadena = false;
    } else {
        concatenadas = concatenadas + " - " + texto;
    }
    console.log(concatenadas);
}

4- Realiza un script que pida numeros hasta que se pulse "cancelar".
Si no es un numero deberá indicarse con un alert y seguir pidiente numeros
Al salir con cancelar debera indicar la suma total de los numeros introducirlos.*/

let numero = "";
let comprobacion = true

while (comprobacion) {
    numero = parseInt(prompt("Ingrese numeros"));
    console.log(numero);
    if (numero == null) {
        comprobacion = false;
    } else {
        alert("No es un numero valido");
    }
}








