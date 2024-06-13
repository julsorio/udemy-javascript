/**
 * promises
 * 
 * estado pendiente
 * estado resuelto
 * estado rejected
 */

let miPromise = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion) {
        resolver('resolver correcto');
    } else {
        rechazar('se produjo un error');
    }
});

/*miPromise.then(
    valor => console.log(valor),//se ejecuta cuando la promesa retorna true
    error => console.log(error)//se ejecuta cuando la promesa retorna false
);*/

/*miPromise.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
);*/

//llamadas asincronas
let miPromise2 = new Promise((resolver) => {
    setTimeout(() => {
        console.log('antes de promise y timeout');
        resolver('promise y timeout', 3000);
        console.log('despues de promise y timeout');
    });
});

miPromise2.then(
    valor => console.log(valor)
);

/**
 * async
 */
async function miFuncionConPromesa() {
    return 'ejecuta promesa y async';
}

miFuncionConPromesa().then(
    valor => console.log(valor)
);

/**
 * await en conjunto con async
 * 
 * await sirve para esperar el resultado de una promesa
 */

async function miFuncionConPromesa2() {
    let miPromise3 = new Promise((resolver) => {
        resolver('promesa con await');
    });

    console.log(await miPromise3);
    //await solo se puede usar dentro de una funcion async
}

miFuncionConPromesa2();

/**
 * combinacion de setTimeout async y await
 */

async function miFuncionConPromesaAwaitTimeout() {
    let miPromise4 = new Promise((resolver) => {
        setTimeout(() => {
            resolver('promesa con await y timeout');
        }, 4000);
    });

    console.log(await miPromise4);
}

miFuncionConPromesaAwaitTimeout();