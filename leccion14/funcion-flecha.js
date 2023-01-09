/**
 * funciones flecha
 */

//funcion clasica
function miFuncion() {
    console.log('miFuncion');
}

miFuncion();

let miFuncion2 = function() {
    console.log('funcion 2');
}

let miFuncionFlecha = () => {
    console.log('funcion flecha');
}

miFuncionFlecha();

/**
 * no se puede aplicar el concepto de hoisting en funciones flecha, es decir,
 * no se puede invocar la funcion antes de su declaracion 
 */

let miFuncionFlecha2 = () => console.log('funcion flecha en una sola linea');
miFuncionFlecha2();

let saludar = () => {
    return 'saludos desde funcion flecha';
}
console.log(saludar());

let saludar2 = () => 'saludar desde una sola linea';
console.log(saludar2());

let regresaObjeto = () => ({nombre: 'el nombre', apellido: 'el apellido'});
console.log(regresaObjeto());

let funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('probando argumento');

let funcionConParametros2 = mensaje => console.log(mensaje);
funcionConParametros2('prueba argumento 2');

let funcionMultiplesParametros = (op1, op2) => op1 + op2;
console.log(funcionMultiplesParametros(4, 9));
 
let funcionMultiplesParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
}
console.log(funcionMultiplesParametros2(48, 845));