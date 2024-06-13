/**
 * funcion callback
 * funcion que se pasa como parametro a otra funcion
 */

function miFuncion1() {
    console.log('funcion 1');
}

function miFuncion2() {
    console.log('funcion 2');
}

//ejecucion secuencial de los metodos
miFuncion1();
miFuncion2();

function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack) {
    let res = op1 + op2;
    funcionCallBack(`Resultado: ${res}`);
}

sumar(48, 28, imprimir);

let imprimir2 = function imprimir2(mensaje) {
    console.log(mensaje);
}
 
sumar(57, 20, imprimir2);

//llamadas asincronas con setTimeout

function miFuncionCallback() {
    console.log('saludo despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000); //el tiempo esta expresado en milisegundos

setTimeout(function() {console.log('saludo despues de 6 segundos'), 6000});

setTimeout(() => console.log('saludo despues de 9 segundos'), 9000);

//funcion setInterval
//tambien recibe una funcion como parametro

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);