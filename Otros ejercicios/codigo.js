// let nombre = "Jesus";
// let apellido = "Fernandez";

// Imprimir valores en la consola
// console.log(nombre);
// console.log(apellido);

// Reasignar una variable el valor

/* 
comnetarios de multiples
lineas
*/
// nombre = "Omar";
// console.log(nombre);

// Declaracion de una variable
// let variable;
// Asignacion de una variable
// variable = "algun dato";
// Declaracion y una asignacion
// let variable2 = "otro dato";
// Reasignacion de una variable
// variable2 = "reasignacion de dato";

// let nombre = "Jesus";
// let apellido = "Fernandez";
// let edad = 30;
// let fechaDeNacimiento = "1993-01-22";
// let soltero = true;
// let activo = false;

// console.log(nombre + " " + apellido);
// console.log(edad);
// console.log(fechaDeNacimiento);
// console.log(soltero);

// let precio = "45";
// let cantidad = 5;

// let total = Number(precio) + cantidad;
// console.log(total);

// let operando1 = 100;
// let operando2 = 50;

// let suma = operando1 + operando2;
// let resta = operando1 - operando2;
// let multi = operando1 * operando2;
// let division = operando1 / operando2;

// console.log("Suma: " + suma);
// console.log("Resta: " + resta);
// console.log("Multiplicacion: " + multi);
// console.log("Divison: " + division);

// let comparacion = operando1 > operando2 && operando1 < operando2;
// console.log(comparacion);

// let edad = 9;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else if (edad >= 14) {
//   console.log("Eres mayor a 14 pero menor a 18");
// } else if (edad >= 10) {
//   console.log("Mayor a 10");
// } else {
//   console.log("Menor a 10");
// }

// switch (edad) {
//   case 7:
//     console.log("Tu tienes 7");
//     break;
//   case 8:
//     console.log("Tu tienes 8");
//     break;
//   default:
//     console.log("No encontre ningun caso valido");
//     break;
// }

// console.log(edad);

// let numero1 = 100;
// let numero2 = 100;

// if (numero1 > numero2) {
//   console.log("El numero1 es mayor al numero2");
// } else if (numero1 < numero2) {
//   console.log("El numero1 es menor al numero2");
// } else {
//   console.log("Los numeros son iguales");
// }

// console.log("Ejecutado antes  del ciclo for");

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// console.log("Ejecutado despues del ciclo for");

// let contador = 0;
// while (contador <= 10) {
//   console.log(contador);

//   contador++;
// }

// let numero1 = 100;
// let numero2 = 50;
// let numero3 = 8;
// let numero4 = 9;
// let numero5 = 76;
// let numero6 = 45;

// let suma = numero1 + numero2;
// let suma2 = numero3 + numero4;
// let suma3 = numero5 + numero6;

// console.log("Suma: " + suma);
// console.log("Suma2: " + suma2);
// console.log("suma3: " + suma3);

// function sumaDeNumeros(primerNumero, segundoNumero) {
//   let suma = primerNumero + segundoNumero;
//   console.log("Suma: " + suma);
// }

// function saludar() {
//   console.log("Hola a todos");
// }

// sumaDeNumeros(100, 50);
// sumaDeNumeros(8, 9);
// sumaDeNumeros(76, 45);
// saludar();

// Ejercicio
// function pares(numero) {
//   for (let i = 1; i <= numero; i++) {
//     console.log(i * 2);
//   }
// }

// pares(3);

// Ejercicio 2
// function nombre(nombre, apellido) {
//   let nombreCompleto = nombre + " " + apellido;
//   console.log(nombreCompleto);
// }

// nombre("Roberto", "Rivera");
//let frutas= ["Platno", "fresa", [[true, false], "limón", "lechuga"],"uva", "manzana"];
//console.log (frutas);
//console.log (frutas [2][1]);
//console.log (frutas[2][0][1]);

// Agregar al final
//const frutas= ["Platno", "fresa","uva", "manzana"];
//console.log (frutas);

//Agregar datos al final con push
//frutas.push("mora");
//console.log (frutas); 

//Eliminar datos al final
//frutas.pop ();
//console.log (frutas);

//agregar datos al principio
//frutas.unshift ("cereza");
//console.log (frutas); 

//Elimina un elemento ak ininicio 
//frutas.shift();
//console.log (frutas);

//Para reemplazar un elemento con splice 
//frutas.splice (2, 2, "Sandia", "naranja");
//console.log (frutas);

//Utilizar for
//const frutas= ["Platno", "fresa", "pera", "uva", "manzana"];
//console.log (frutas);
//console.log (frutas.length);
//for (let i = 0; i <frutas.length; i++) {console.log (frutas[i])};

//frutas.forEach(function(fruta, indice) {
  //  console.log (indice);
    //console.log (fruta);
//});

//Map
//const frutas2= frutas.map(function (frutas) {return frutas.toUpperCase ()});
//console.log (frutas2);

//find... buscar ejemplo 

//filter

//const numeros = [1, 2, 3, 4, 5];
//console.log (numeros);

//const valor = numeros.reduce (function (acumulado, numero) { 
  //  return acumulado + numero;
//}, 100)

//console.log (valor); 

//Ejercicio
//let numero = 2;
//for (let i= 1; i <= 10; i++) {
//    console.log (numero + "x" + i + "=" + numero * i);
//}

//Segunda opción
//let nombre = "Perla";
//let apellido = "Mondragón";

//console.log (nombre + " " + apellido);
//console.log (`${nombre} ${apellido}`); 
  
/* Crear un metodo que reciba un array de calificaciones y obtenga el promedio con el uso de los métodos de arrayas 
Si el promedio es mayor a 70 imprima que aprobó, si es menor, que no aporbó 

promedio (70, 80, 90, 60) // Aprobado: 76
promedio (70, 80, 90, 60) // No aprobo: 65
*/

/*function promedio(calificaciones) {
    const sum = calificaciones.reduce (function(acumulado,calificacion) {
        return acumulado + calificacion;
    }, 0);

    const promedio = sum / calificaciones. length; 

    if (promedio >= 70) {
        console.log(`Aprobado: ${promedio}`);
    } else {
        console.log(`Reprobado: ${promedio}`);
    }
    }

    promedio ([70, 50, 75, 70, 60]);*/

    function aprobadas (calificaciones) {
      const calificacionesAprobadas = calificaciones.filter (function (calificacion){
        if (calificacion >= 70) {
          return calificacion;
        }
      });

      console.log (calificacionesAprobadas);
    }

    aprobadas ([50, 80, 100, 69, 70, 10])