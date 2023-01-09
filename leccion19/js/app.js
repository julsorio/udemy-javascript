//variable global
let arregloPersonas = [
    
];

function mostrarPersonas() {
    let texto = '';
    for(let obj of arregloPersonas) {
        texto += `<li>${obj.nombre} ${obj.apellido}</li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    let formulario = document.forms['formulario'];
    let nombre = formulario['nombre'].value;
    let apellido = formulario['apellido'].value;
    
    if(nombre !== '' && apellido !== '') {
        let persona = new Persona(nombre, apellido);
        arregloPersonas.push(persona);
    
        formulario['nombre'].value = '';
        formulario['apellido'].value = '';
    }

    mostrarPersonas();
}