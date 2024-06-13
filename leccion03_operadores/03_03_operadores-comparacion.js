//operadores de comparacion
let a = 3, b = 2, c = '3';

let z = (a == b); //se compara el valor sin importar el tipo
console.log(z);

//cambia el resultado
z = (a == c);
console.log(z);


z = (a === c); // valida si los valores y el tipo son iguales
console.log(z);

z = (a != c); //compara el valor
console.log(z);

//compara el valor y también el tipo
z = (a !== c);
console.log(z);

z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);