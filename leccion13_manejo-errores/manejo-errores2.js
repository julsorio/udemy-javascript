'use strict'

let resultado = -10;

try {
    
    if(isNaN(resultado)) throw 'no es numerico';
    else if(resultado === '') throw 'cadena vacia';
    else if(resultado >= 0) throw 'valor positivo';
    else if(resultado < 0) throw 'valor negativo';
} catch (error) {
    console.log(error);
    /*console.log(error.name);
    console.log(error.message);*/
} finally {
    console.log('finally');
}