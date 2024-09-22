"use strict";
let texto = 'saludo con una variable en typescript';
let numero = 10;
/**
 * inferencia de tipos
 * los tipos de dato en typescript son mas rigurosos
 *
 * a texto se le ha asignado una cadena de texto y posteriormente no se puede asignar
 * otro tipo de dato, por ejemplo, texto = 0;
 *
 * el tipo de dato any permite asignar cualquier tipo de dato
 */
let prueba;
prueba = 'probando el tipo de dato any';
prueba = 8;
/**
 * constantes se definen con la palabra reservada const
 */
const PI = 3.1416;
function saludar() {
    console.log(texto);
    console.log(numero);
    console.log(PI);
}
saludar();
