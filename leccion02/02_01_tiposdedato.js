//tipo string
let nombre = 'nombre es string';
console.log(nombre);

//tipo numerico
let numero = 10;
console.log(numero);

//tipo objeto
let obj = {
    nombre : 'mi nombre',
    apellido : 'mi apellido',
    edad : 10
};
console.log(obj);

//operador typeof
console.log(typeof nombre);

//variable dinamica
nombre = 10;
console.log(typeof nombre);

console.log(typeof obj);

//tipo boolean
let positivo = true;
let negativo = false;

console.log(positivo);
console.log(typeof negativo);

//tipo function
function func() {};
console.log(func);
console.log(typeof func);

//tipo symbol
var simbol = Symbol('mi simbolo');
console.log(simbol);
console.log(typeof simbol);

//tipo clase
class persona {
    constructor(nombre, apellido) {
        this.nombre = 'pepe';
        this.apellido = 'perez';
    }
}

console.log(persona);
console.log(typeof persona);

//tipo undefined
var x;
console.log(x);
console.log(typeof x);

//tipo null
var y = null;
console.log(y);
console.log(typeof y);

//arrays
let autos = ['renault', 'ferrari', 'bmw', 'audi'];
console.log(autos);
console.log(typeof autos);