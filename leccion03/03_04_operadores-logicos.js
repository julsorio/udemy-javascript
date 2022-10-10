let a = 15, valorMinimo = 0, valorMaximo = 10;

if(a >= valorMinimo && a <= valorMaximo) {
    console.log(`${a} esta dentro del rango ( mayor a ${valorMinimo} y menor a ${valorMaximo})`)
} else {
    console.log(`${a} esta fuera del rango`);
}

let tieneVacaciones = false, esDiaDescanso = false;
if(tieneVacaciones || esDiaDescanso) {
    console.log('puede ver el partido');
} else {
    console.log('no puede ver el partido');
}

//operador ternario
let resultado = (1 > 2) ? 'verdadero' : 'falso';
console.log(resultado);

let numero = 110;
resultado = (numero % 2 == 0) ? 'es par' : 'es impar';
console.log(resultado);

//convertir string a number
let miNumero = '10';
console.log('variable miNumero es tipo ' + typeof miNumero);
let edad = Number(miNumero);
console.log(edad + ' es de tipo ' + typeof edad);

resultado = (edad >= 18) ? 'puede votar' : 'muy joven para votar';
console.log(resultado);


let prueba = '18x'
let validar = Number(prueba);
console.log(validar);

if(isNaN(validar)) {
    console.log('no es numerico');
} else {
    console.log('numerico');
}