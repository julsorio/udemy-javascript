/**
 * se recomienda camel case para nombrar las funciones
 * 
 * puede tener 0 a n argumentos
 */

//declaracion
function miFuncion(a, b) {
    //cuerpo de la funcion
    console.log('suma : ' + (a + b));
}

//se invoca la funcion
miFuncion(10, 4);

//palabra reservada return

function pruebaRetorno(a, b) {
    return a + b;
}

//se muestra en consola
console.log(pruebaRetorno(8, 9));

//el valor se almacena en una variable
let valor = pruebaRetorno(8, 4);
console.log(valor);

//function tipo expresion o anonimas
let x = function(a, b) {
    return a + b;
};
resultado = x(4, 10);
console.log(resultado);

//self invoking
(function() {
    console.log('self invoking');
})();

(function(a, b) {
    console.log((a + b));
})(7, 3);

//cantidad de argumentos en una funcion
function test(a, b) {
    console.log(arguments.length);
}

test(1, 3);

//funciones flecha

//funcion expresion
let testExpresion = function(a, b) {
    return a + b;
};

//se omite la palabra reservada function
const funcionTipoFlecha = (a, b) => a + b;
resultado = funcionTipoFlecha(4, 9);
console.log(resultado);

//argumentos y parametros
/**
 * parametros - lista de valores que recibe una funcion
 * 
 * argumentos - valores que se asignan a los parametros de la funcion
 */

let sumar = function(a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
};

resultado = sumar();
console.log(resultado);

//se pueden asignar valores por defecto
let sumar2 = function(a = 49, b = 58) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
};

resultado = sumar2();
console.log(resultado);

//es permitido que el numero de parametros no coincida con el numero
//de argumentos
let sumar3 = function(a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
};

resultado = sumar3(4, 20, 84);
console.log(resultado);

//ejercicio

let resultadoEjemplo = sumarTodo(4, 49, 12, 3);
console.log(resultadoEjemplo);

function sumarTodo() {
    let suma = 0;
    for(let pos = 0; pos < arguments.length; pos ++) {
        suma += arguments[pos];
    }

    return suma;
}

//paso por valor y paso por referencia

//paso por valor
let y = 10; //valor primitivo

function cambiarValor(a) {
    a = 20; //copia del valor 
    //la variable a existe en el ambito del metodo
}

console.log(cambiarValor(y));
console.log(y);

//paso por referencia
const persona = {
    nombre : 'julian',
    apellido : 'osorio'
}

function cambiarValorObj(p1) {
    p1.nombre = 'ramiro';
    p1.apellido = 'ramirez';
}

cambiarValorObj(persona);
console.log(persona);