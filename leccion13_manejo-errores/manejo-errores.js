/**
 * manejo de errores
 */

'use strict'

try {
    //x = 10;
    //miFuncion();
    let x = 10;
} catch (error) {
    console.log(error);
} finally {
    console.log('finally');
}
console.log('texto');

/**
 * throw para lanzar errores
 */

try {
    y = 20;
} catch(error) {
    throw 'Mi error';
} finally {
    console.log('probando throw');
}

console.log('probando throw');