//se define el tipo de dato
let saludo:string = "Hola mundo";

/**
 * en typescript se aplica la inferencia de datos
 * 
 * saludo = 10 retorna error
 */
let numero:number = 10;

/**
 * tipo de dato any para almacenar cualquier tipo de dato
 * let cualquier:any = "cadena"
 * cualquier = 10;
 */

/*function saludar() {
    console.log('saludo y despedida');
}*/
function saludar() {
    console.log(saludo);
    console.log(numero);
}

saludar();