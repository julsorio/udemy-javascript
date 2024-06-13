//operadores
let a = 3;
let b = 2;
let result = a + b;
console.log(`Resultado de la suma ${result}`);

result = a - b;
console.log(`Resultado de la resta ${result}`);

result = a * b;
console.log(`Resultado de la multiplicacion ${result}`);

result = a / b;
console.log(`Resultado de la division ${result}`);

result = a % b;
console.log(`Resultado de modulo ${result}`);

result = a ** b;
console.log(`Resultado de exponente ${result}`);

//incremento tiene 2 variantes
//pre incremento (++ antes de la variable)
result = ++a;
console.log(a);
console.log(result);

//post incremento (++ despues de la variable)
result = b++;
console.log(b);
console.log(result);

//decremento (aplican las 2 variantes)
//pre decremento
result = --a;
console.log(a);
console.log(result);

//post decremento
result = a--;
console.log(a);
console.log(result);

//precedencia de operadores
let c = 3;
let d = 2;
let e = 1;

result = c * d + e;
console.log(result);

result =  e + c * d;
console.log(result);

//se modifica el orden de prioridad con los parentesis
result = (e+c)*d;
console.log(result);

//operador de asignacion
let f = 8;

//operador de asignacion compuesto
f += 4;
console.log(f);

f -= 7;
console.log(f);

f *= 3;
console.log(f);

f /= 5;
console.log(f);

f %= 2;
console.log(f);

//operadores de comparacion
let g = 3, h = 2, i = '3';

//operador igual
//revisa el valor sin importar el tipo
let res = g == h;
console.log(res);

res = g == i;
console.log(res);

//operacion igual estricto
//se revisa el valor y el tipo
res = g === i;
console.log(res);

//operador distinto
res = g != h;
console.log(res);

//tambien hay operador distinto estricto
res = g !== i;
console.log(res);

//operadores relacionales
res = g < h;
console.log(res);

res = g <= h;
console.log(res);

res = g > h;
console.log(res);

res = g >= h;
console.log(res);

//operadores logicos

let init = 15, min = 0, max = 10;

if(init >= min && init <= max) {
    console.log(` ${init} esta dentro del rango`);
} else {
    console.log(` ${init} esta fuera del rango`);
}

let vacaciones = true, diaDescanso = true;

if(vacaciones|| diaDescanso) { 
    console.log('puede asistir al juego');
} else {
    console.log('no puede asistir al juego');
}

//else if
let ejemplo = 8;

if(ejemplo == 1) {
    console.log('numero uno');
} else if(ejemplo == 2) {
    console.log('numero dos');
} else if(ejemplo == 3) {
    console.log('numero tres');
} else if(ejemplo == 4) {
    console.log('numero cuatro');
} else {
    console.log('desconocido');
}

//operador ternario

let resultado = (1 > 2) ? 'verdadero' : 0;
console.log(resultado);

let numero = 80;
resultado = (numero % 2 == 0) ? 'numero par' : 'numero impar';
console.log(resultado);

//ejercicio
let mes = 9;
let estacion;

if(mes == 12 ||mes == 1 || mes == 2) {
    estacion = 'invierno';
} else if(mes == 3 || mes == 4 || mes == 5) {
    estacion = 'primavera'
} else if(mes == 6 || mes == 7 || mes == 8) {
    estacion = 'verano';
} else if(mes == 9 || mes == 10 || mes == 11) {
    estacion = 'otoño';
} else {
    estacion = 'valor incorrecto';
}

console.log(estacion);

//ejercicio estacion con switch
switch(mes) {
    case 12: case 1: case 2:
        estacion = 'invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'verano';
        break;
    case 9: case 10: case 11:
        estacion = 'otoño';
        break;
    default:
        estacion = 'valor incorrecto';
}
console.log(estacion);

//ejercicio hora del día
/*
6am 11am - buenos dias
12m 18 - buenas tardes
19 24 - buenas noches
0 6 - durmiendo
*/

let hora = 6;
let salida;
if(hora < 0 || hora > 24) {
    salida = 'valores incorrectos';
} else if(hora >= 0 && hora <= 6) {
    salida = 'durmiendo';
} else if(hora >= 6 && hora <= 11) {
    salida = 'buenos dias';
} else if(hora >= 12 && hora <= 18) {
    salida = 'buenas tardes';
} else if(hora >= 19 && hora <= 24) {
    salida = 'buenas noches';
}

console.log(salida);

//sentencia switch
//utiliza comparacion estricta
let number = 3;
let numberText = 'valor desconocido';

switch(number) {
    case 1: 
        numberText = 'numero uno';
        break;
    case 2:
        numberText = 'numero dos';
        break;
    case 3:
        numberText = 'numero tres';
        break;
    case 4:
        numberText = 'numero cuatro';
        break;
    default:
        numberText = 'error';
}

console.log(numberText);