/*tipos de datos 
*/

//string
var nombre = 'Nombre';
console.log(nombre);

//numerico
var numero = 1000;
console.log(numero);

//objeto
var objeto = {
    nombre : 'felipe',
    apellido : 'ramos',
    telefono : '123456'
};
console.log(objeto);

//variables dinamicas
nombre = 10;
console.log(typeof nombre);


//boolean
var flag = true;
console.log(typeof flag);

//function
function miFuncion() {

}
console.log(typeof miFuncion);

//symbol
var simbolo = Symbol('mi simbolo');
console.log(typeof simbolo);

//tipo clase
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//undefined
var indefinido;
console.log(indefinido);
console.log(typeof indefinido);
//se puede asignar a una variable
var asignado = undefined;

//null (ausencia de valor)
var nulo = null;
console.log(nulo);
console.log(typeof nulo);

//array
var autos = ['bmw', 'audi', 'volvo'];
console.log(autos);
console.log(typeof autos);