//definir un objeto
let persona = {
    nombre : 'alberto',
    apellido : 'gutierrez',
    edad : 10,
    email : 'email@mail.com',
    //metodo en el objeto
    nombreCompleto : function() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.nombreCompleto());

//creacion de un objeto
let persona2 = new Object();
persona2.nombre = 'carlos';
persona2.apellido = 'tercero';
persona2.edad = 80;
persona2.email = 'carlostercero@gmail.com';

console.log(persona2);

//alternativas de acceso a propiedades de objetos
//se accede como si el objeto fuera un arreglo
console.log(persona['nombre']);
console.log(persona['apellido']);

//for in
for(prop in persona) {
    console.log(prop);
    console.log(persona[prop]);
}

//añadir o eliminar propiedades en objetos
persona.telefono = '4948349';
console.log(persona);

//se usa delete
delete persona.telefono;
console.log(persona);

//imprimir un objeto
/**
 * con console.log se mostrara [object Object]
 */
//se pueden concatenar los atributos
console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.edad + ' ' + persona.email);

//for in
for(prop in persona) {
    console.log(persona[prop]);
}

//Object.values -> retorna el objeto como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

//JSON.stringify -> convierte el objeto en cadena de texto
let personaString = JSON.stringify(persona);
console.log(personaString);

//getter y setter en objetos (mejores practicas)
let persona3 = {
    nombre : 'alonso',
    apellido : 'perez',
    edad : 18,
    idioma : 'it',
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    },
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    }
}

console.log(persona3.nombreCompleto);
console.log(persona3.lang);
persona3.lang = 'en';
console.log(persona3.lang);
console.log(persona3.idioma);

//metodo constructor
/**
 * se crea una funcion con el nombre del objeto
 */

function Persona(nombre, apellido, edad, idioma) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.idioma = idioma;
}

let padre = new Persona('julio', 'jimenez', 40, 'it');
console.log(padre);

let madre = new Persona('maria', 'martinez', 38, 'it');
console.log(madre);

/**
 * se pueden agregar metodos a un metodo constructor
 */
function Persona2(nombre, apellido, edad, idioma) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.idioma = idioma;
    this.nombreCompleto = function() {
        return nombre + ' ' + this.apellido;
    }
}

let hijo = new Persona2('mario', 'marino', 59, 'en');
console.log(hijo.nombreCompleto());

/**
 * alternativas para creacion de objetos
 */
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena = new String('hola'); //no es recomendable
let miCadena2 = 'hola';

let miNumero = new Number(1); //no es recomendable
let miNumero2 = 1;

let miBoolean = new Boolean(true); //no es recomendable
let miBoolean2 = true;

let miArreglo = new Array(); //no es recomendable
let miArreglo2 = [];

let miFunction = new Function();
let miFuncion2 = function() {};

/**
 * es posible añadir atributos a un objeto sin modificar
 * otros objetos del mismo tipo
 */
function Persona3(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

let doctor = new Persona3('domingo', 'dominguez', 40);
console.log(doctor);
doctor.email = 'domingod@mail.com';
console.log(doctor);

let arquitecto = new Persona3('fabio', 'feliciano', 34);
console.log(arquitecto.email);

//se utiliza prototype para agregar una nueva propiedad
Persona3.prototype.email = 'nuevo@mail.com';
console.log(doctor.email);
console.log(arquitecto.email);

//prototype también puede modifica metodos

/**
 * metodo call se utiliza para llamar el metodo de un objeto desde otro
 */

function Objeto1(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = function() {
        return nombre + ' ' + apellido;
    }
}

let objeto2 = {
    nombre : 'Jimena',
    apellido : 'Jimenez'
}

//uso de call para invocar el metodo nombreCompleto con los datos de
//objeto2
let obj = new Objeto1('Vlad', 'Tepes');
console.log(obj.nombreCompleto());

console.log(obj.nombreCompleto.call(objeto2));

/**
 * se pueden pasar argumentos al metodo call
 */
let objeto3 = {
    nombre : 'gustavo',
    apellido : 'gonzales',
    nombreCompleto : function(edad, telefono) {
        return this.nombre + ' ' + this.apellido + ' ' + edad + ' ' + telefono;
    }
}

let objeto4 = {
    nombre : 'david',
    apellido : 'martinez'
}

console.log(objeto3.nombreCompleto());
console.log(objeto3.nombreCompleto.call(objeto4, 43,'8584993'));

/**
 * metodo apply
 * 
 * el objeto2 invoca un metodo del objeto1 que no tiene 
 * definido
 */
let objeto5 = {
    nombre : 'felipe',
    apellido : 'ordoñez',
    nombreCompleto : function() {
        return this.nombre + ' ' + this.apellido;
    }
}

let objeto6 = {
    nombre : 'marcelo',
    apellido : 'briceño'
}

console.log(objeto5.nombreCompleto());
console.log(objeto5.nombreCompleto.apply(objeto6));

let objeto7 = {
    nombre : 'fidel',
    apellido : 'nadal',
    nombreCompleto : function(titulo, telefono) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    }
}

let objeto8 = {
    nombre : 'arturo',
    apellido : 'maduro'
}

console.log(objeto7.nombreCompleto('sr', '48574833'));

//con apply, los parametros se pasan en un arreglo
let arregloPrueba = ['ing', '94948383'];
console.log(objeto7.nombreCompleto.apply(objeto8, arregloPrueba));