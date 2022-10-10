console.log('ciclos');

//while
/*
si la condicion es verdadera se ejecuta el bloque de codigo
y termina hasta que la condicion sea falsa
*/

let contador = 0;

while(contador < 3) {
    console.log(contador);
    contador ++;
}


//do while
/**
 * el ciclo se ejecuta al menos una vez
 * luego valida la condicion
 */
 contador = 0;

 do {
    console.log(contador);
    contador++;
 } while(contador < 3);

 //ciclo for
 /**
  * seccion de inicializacion
  * revision de condicion
  * ejecucion de codigo
  * incremento/decremento de contador
  * 
  * se pueden inicializar mas de una variable
  * for(let contador=0, x = 0, y=1...)
  */

 for(contador = 0; contador < 3; contador++) {
    console.log(contador);
 }

 //break y continue
 /**
  * break se utiliza tambien para romper un ciclo
  */

 for(contador = 0; contador <= 10; contador ++) {
    //console.log(contador);
    if(contador % 2 == 0) {
        console.log(contador);
        break;
    }
 }

 for(contador = 0; contador <= 10; contador ++) {
    if(contador % 2 !== 0) {
        continue; //salta a la siguiente iteracion
    } else {
        console.log(contador);
    }
 }

 //etiquetas
 /**
  * su uso no es recomendable
  */
 inicio:
 for(contador = 0; contador <= 10; contador ++) {
    if(contador % 2 !== 0) {
        continue inicio; //salta a la siguiente iteracion
    } else {
        console.log(contador);
    }
 }

 inicio:
 for(contador = 0; contador <= 10; contador ++) {
    if(contador % 2 !== 0) {
        break inicio; //salta a la siguiente iteracion
    } else {
        console.log(contador);
    }
 }