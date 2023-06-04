/*1- Escribir un programa que solicite la edad 
y si es mayor de 18 años 
mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido 
indicarlo en un mensaje.

let edad = prompt("Coloque su edad");

if (edad > 17) {
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

/*4- Realiza un script que pida numeros hasta que se pulse "cancelar".
Si no es un numero deberá indicarse con un alert y seguir pidiendo numeros
Al salir con cancelar debera indicar la suma total de los numeros introducirlos.

let suma = 0;
let continua = true;

while (continua) {
  let numero = prompt("Ingrese un número (o presione 'Cancelar' para salir):");

  if (numero === null) {
    continua = false;
  } else {
    numero = parseFloat(numero);

    if (isNaN(numero)) {
      alert("¡Error! Debe ingresar un número válido.");
    } else {
      suma += numero;
    }
  }
} 

alert("La suma total de los números introducidos es: " + suma);*/

/*5- Realizar una página con un script que calcule el valor de la letra
de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

Input:  40773821 
Output: ‘L’

let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

do {
  let documento = prompt("Escriba su DNI");

  if (documento >= 0 && documento <= 99999999) {
    let resto = documento % 23;
    let representa = letras.charAt(resto);
    alert("La letra del DNI " + documento + " es: " + representa);
  } else {
    alert("Ingrese un número válido");
  }
} while (confirm("¿Desea seguir ingresando números de DNI?"));*/


/*6- Realiza un script que escriba una pirámide del 1 al 30 
de la siguiente forma :

1
22
333
4444
55555
666666
…….

for (let i = 1; i < 31;i++) {
    let auxiliar = i + "";
    console.log(auxiliar.repeat(i));
}

7- Haz un script que escriba una pirámide inversa de los números
del 1 al número que indique el usuario (no mayor de 50)  
de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

let numero = parseInt(prompt("Ingreso un numero"));
if (numero <= 50) {
    for (let i = numero; i > 0; i--) {
        console.log(i.toString().repeat(i));  
} 

} else {
    console.log("Error");
}*/

/*8- Crea script para generar pirámide siguiente 
con los números del 1 al número que indique el usuario (no mayor de 50).

let numero = prompt("Ingrese un número (no mayor de 50):");
numero = parseInt(numero);

if (isNaN(numero) || numero > 50) {
  alert("Debe ingresar un número válido y no mayor de 50.");
} else {
  for (let i = 1; i <= numero; i++) {
    let fila = "";
    for (let concatena = 1; concatena <= i; concatena++) {
     fila += concatena + " ";
    }
    console.log(fila);
  }
}*/

/*9- Crea un script que escriba los números del 1 al 500, 
que indique cuáles son múltiplos de 4 y de 9 
y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10


for (let i = 1; i < 501; i++) {
    let mensaje = i;
      
      if (i % 4 == 0 && i % 9 == 0) {
         mensaje += " (multiplo de 4 y 9)";
     } else if (i % 4 == 0) {
          mensaje += " (multiplo de 4)";
      } else if (i % 9 == 0)  {
        mensaje += " (multiplo de 9)";
      } else {
          console.log(mensaje);
      }
        
      if (i % 5 === 0) {
       console.log(`————————————————————`);
      }
  }*/

 /* 10- Realiza un script que pida número de filas y columnas 
y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número 
consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let columnas = parseInt(prompt(`ingrese el numero de columnas`));
let filas = parseInt(prompt(`ingrese el numero de columnas`));
let numero = columnas * filas;
let celda;

for (let i = 0; i < columnas; i++) {
   for (let j = 0; j < filas; j++) {
        celda = numero;
        numero = numero - 1;
        console.log("el valor de la celda de la columna " + i + 1 + " y fila " + j + 1 + "tiene el valor: "  + celda);
    }
}*/

/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let nombres = [];
let edades = [];



for (let i = 0; i < 3; i++) {
     nombres.push(prompt(`ingrese un nombre:`)) ;
     console.log (nombres);
     edades.push(prompt(`ingrese la edad de ${nombres[i]}`)) ;
     console.log (edades);
 }
 if (edades [1] > edades[2]) {
     if (edades [1] > edades [3]) {
        document.write(`${nombres [1]} es el mayor de los tres `);
     } else {
        document.write(`${nombres [3]} es el mayor de los tres `);
     }
 } else {
     if (edades [2] > edades [3]) {
        document.write(`${nombres [2]} es el mayor de los tres `);
     } else {
        document.write(`${nombres [3]} es el mayor de los tres `);
     }
 }*/

 /*12- Realiza un script que genere un número aleatorio entre 1 y 99

let rango = true;
let numero = 0;

while(rango) {
  numero = Math.floor(Math.random() * 99) + 1;
  if (numero <= 1 && numero >= 99) {
    rango = false;
  }
}

console.log(numero);*/

/*13 -Realiza un script que pida un texto y lo muestre en mayúsculas.

let texto = prompt("Ingrese un texto");
let mayuscula = texto.toUpperCase();

console.log(mayuscula);*/

/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let texto = prompt("Ingrese una cadena de texto");
let resultado = "";

for (let i = 0; i < texto.length; i++) {
  resultado += texto[i];
  if (i !== texto.length - 1) {
    resultado += "-";
  }
}

console.log(resultado);*/

/*15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese una cadena de texto");
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  var caracter = texto[i].toLowerCase();
  if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    contador++;
  }
}

console.log("El número de vocales en el texto es: " + contador);*/

/*16 - Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Ingrese una cadena de texto");
let resultado = "";

for (let i = texto.length - 1; i >= 0; i--) {
  resultado += texto[i];
}

console.log(resultado);*/

/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese una cadena de texto");
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i].toLowerCase();
  if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    posicion = i;
    break;
  }
}

if (posicion !== -1) {
  console.log("La primera vocal se encuentra en la posición: " + posicion);
} else {
  console.log("No se encontraron vocales en el texto.");
}*/


































