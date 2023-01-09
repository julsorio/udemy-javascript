console.log('aplicacion calculadora');

function sumar() {
    const formulario = document.forms['formulario'];
    let resultado = Number.parseInt(formulario['operandoA'].value) + Number.parseInt(formulario['operandoB'].value);

    if(isNaN(resultado)) {
        resultado = 'Se deben ingresar numeros';
    }

    document.getElementById('resultado').innerHTML = resultado;
}