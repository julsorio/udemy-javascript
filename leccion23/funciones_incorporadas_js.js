let saludo = 'hola';
console.log(saludo[0]);
console.log(saludo.length);

saludo[0] = 'p'; //las cadenas de texto son inmutables
console.log(saludo);

for(let pos = 0; pos < saludo.length; pos ++) {
    console.log(`la posicion ${pos} contiene ${saludo[pos]}`);
}

//substring
let cadena = 'hola mundo';
let subcadena = cadena.substring(0, 4);
let subcadena1 = cadena.substring(5);
console.log(subcadena);
console.log(subcadena1);

//concatenacion de cadenas de caracteres
let frase = 'hola';
let frase2 = 'mundo!';

let concatenacion1 = frase + ' ' + frase2;
console.log(concatenacion1);

//con string interpolation
let concatenacion2 = `${frase} ${frase2}`;
console.log(concatenacion2);

let frase3 = 'java';
let frase4 = 'script';
let concatenacion3 = frase3.concat(frase4);
console.log(concatenacion3);

//convertir cadena a numero
let valor1 = '10';
let valor2 = '20';
let valor3 = Number.parseInt(valor1);
let valor4 = Number.parseInt(valor2);
console.log(valor3 + valor4);

//convertir numero a cadena
let valor5 = 10;
let valor6 = 20;
let valor7 = valor5.toString();
let valor8 = valor6.toString();
console.log(valor7 + valor8);

//valor absoluto
let pruebaAbsoluto = -10;
let resultado = Math.abs(pruebaAbsoluto);
console.log(resultado);

//redondeo y truncado
let numero = 49.5;
let resultadoRedondeo = Math.round(numero); //si el decimal es mayor o igual a 5, redondea al valor entero superior cercano
console.log(resultadoRedondeo);

let numero2 = 4.3;
let resultadoRedondeo2 = Math.round(numero2);
console.log(resultadoRedondeo2);

let numero3 = 43.2;
let resultadoTruncado = Math.trunc(numero3); //elimina la parte decimal
console.log(resultadoTruncado);