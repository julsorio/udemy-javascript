//forma antigua
let autos = new Array('bmw', 'ferrari', 'volvo ');

//forma recomendada
let autos1 = ['bmw', 'ferrari', 'volvo '];
console.log(autos1);

//longitud de un arreglo
console.log(autos1.length);
//acceder a una posicion del arreglo
console.log(autos1[0]);

//recorrer un arreglo
for(let pos = 0; pos < autos1.length; pos ++) {
    console.log(autos1[pos]);
}

//modificar el valor en una posicion del arreglo
autos1[1] = 'renault';
for(let pos = 0; pos < autos1.length; pos ++) {
    console.log(autos1[pos]);
}

//añadir un elemento al final
autos1.push('audi');
for(let pos = 0; pos < autos1.length; pos ++) {
    console.log(autos1[pos]);
}

//añadir elemento usando propiedad length
autos1[autos1.length] = 'peugeot';
console.log(autos1);

//tambien se pueden dejar posiciones sin valor en el arreglo
autos1[6] = 'Porsche';
console.log(autos1)

//la variable es un arreglo?
console.log(typeof autos);
console.log(Array.isArray(autos1));
console.log(autos1 instanceof Array);