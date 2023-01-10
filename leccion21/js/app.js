//arreglos de ingresos y egresos
const ingresos = [
    new Ingreso('salario', 4300), 
    new Ingreso('venta coche', 500),
    new Ingreso('asesoria', 80)];
const egresos = [
    new Egreso('pago renta', 600), 
    new Egreso('compra', 60),
    new Egreso('viaje', 200)];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let cargarCabecero = () => {
    //calculo presupuesto
    let presupuesto = totalIngresos() - totalEgresos();

    //porcentaje
    let porcentajeEgreso = totalEgresos()/totalIngresos();

    //document.getElementById('presupuesto').innerHTML = presupuesto;
    //document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
    //document.getElementById('ingresos').innerHTML = totalIngresos();
    //document.getElementById('egresos').innerHTML = totalEgresos();
    escribirEnElemento('presupuesto', formatoMoneda(presupuesto));
    escribirEnElemento('porcentaje', formatoPorcentaje(porcentajeEgreso));
    escribirEnElemento('ingresos', formatoMoneda(totalIngresos()));
    escribirEnElemento('egresos', formatoMoneda(totalEgresos()));
}

let totalIngresos = () => {
    let totalIngresos = 0;
    for(let obj of ingresos) {
        totalIngresos += obj.valor;
    }

    return totalIngresos;
}

let totalEgresos = () => {
    let totalEgresos = 0;
    for(let obj of egresos){
        totalEgresos += obj.valor;
    }

    return totalEgresos;
}

const cargarIngresos = () => {
    let ingresosHtml = "";
    for(let obj of ingresos) {
        ingresosHtml += crearIngresoHtml(obj);
    }

    escribirEnElemento('lista-ingresos', ingresosHtml);
}

const crearIngresoHtml = (ingreso) => {
    let ingresoHtml = `
                <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;

    return ingresoHtml;
}

const cargarEgresos = () => {
    let egresosHtml = "";
    for(let obj of egresos) {
        egresosHtml += crearEgresoHtml(obj);
    }

    escribirEnElemento('lista_egresos', egresosHtml);
}

const crearEgresoHtml = (egreso) => {
    let egresoHtml = `
        <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;

    return egresoHtml;
}

const eliminarIngreso = (idIngreso) => {
    console.log('se elimina ingreso');
    let index = ingresos.findIndex(obj => obj.id === idIngreso);
    ingresos.splice(index, 1);

    cargarCabecero();
    cargarIngresos();
}

const eliminarEgreso = (idEgreso) => {
    console.log('se elimina egreso');
    let index = egresos.findIndex(obj => obj.id === idEgreso);
    egresos.splice(index, 1);

    cargarCabecero();
    cargarEgresos();
}

const agregarDato = () => {
    let tipo = obtenerValorDeElementoForm("formulario", "tipo");
    let descripcion = obtenerValorDeElementoForm("formulario", "descripcion");
    let valor = obtenerValorDeElementoForm("formulario", "valor");

    if(descripcion !== '' && valor !== '') {
        switch (tipo) {
            case 'ingreso':
                console.log('ingreso');

                let ingreso = new Ingreso(descripcion, Number.parseFloat(valor));
                ingresos.push(ingreso);

                break;
        
            case 'egreso':
                console.log('egreso');

                let egreso = new Egreso(descripcion, Number.parseFloat(valor));
                egresos.push(egreso);

                break;
        }

        escribirEnElementoForm('formulario', 'descripcion', '');
        escribirEnElementoForm('formulario', 'valor', '');

        cargarCabecero();
        cargarIngresos();
        cargarEgresos();

    }

}

let escribirEnElemento = (id, texto) => {
    document.getElementById(id).innerHTML = texto;
}

let obtenerValorDeElementoForm = (formulario, id) => {
    let form = document.forms[formulario];
    return form[id].value;
}

let escribirEnElementoForm = (formulario, id, valor) => {
    let form = document.forms[formulario];
    form[id].value = valor;
}

let formatoMoneda = (valor) => {
    return valor.toLocaleString('es-ES', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2});
}

let formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-ES', {style: 'percent', minimumFractionDigits: 2});
}