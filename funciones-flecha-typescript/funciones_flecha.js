"use strict";
let suma = function (primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
};
console.log('se invoca el metodo suma (de forma corriente)');
console.log(suma(4389, 21));
console.log('ahora invoca un metodo flecha');
let suma2 = (primerNumero, segundoNumero) => {
    return primerNumero + segundoNumero;
};
console.log(suma2(434, 43));
let mostrarNombre = () => {
    return "funcion flecha que retorna el nombre Pepito Duran";
};
console.log(mostrarNombre());
