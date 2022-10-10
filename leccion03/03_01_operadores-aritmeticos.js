// suma + 
// resta - 
// multiplicacion*
// exponencial **
// division /
// modulo %
// incremento ++
// decremento --

let a = 3, b = 2, c = 1, d = 4;
let z = a + b;
console.log('resultado suma: ' + z);

z = a - b;
console.log('resultado resta: ' + z);

z = a * b;
console.log('resultado multiplicacion: ' + z);

z = a / b;
console.log('resultado division: ' + z);

z = a % b;
console.log('resultado modulo: ' + z);


z = a ** b;
console.log('operador exponente: ' + z);

//pre incremento
//operador ++ antes de la variable
z = ++a;
console.log(a);
console.log(z);

//post incremento
//operador ++ despues de la variable
z = b++;
console.log(b);
console.log(z);

//pre decremento
z = --a;
console.log(a);
console.log(z);

//post decremento
z = b--;
console.log(b);
console.log(z);

//precedencia de operadores
z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);