let valorCuota = 1000
let socios = [{
        nroSocio: 1,
        nombre: "CAM",
        apellido: "CUE",
        edad: 12,
        genero: "F",
        cuotaPaga: false
    },
    {
        nroSocio: 2,
        nombre: "FAT",
        apellido: "CUE",
        edad: 2,
        genero: "F",
        cuotaPaga: false
    },
    {
        nroSocio: 3,
        nombre: "FAC",
        apellido: "CUE",
        edad: 22,
        genero: "M",
        cuotaPaga: true
    },
    {
        nroSocio: 4,
        nombre: "TUC",
        apellido: "CUE",
        edad: 25,
        genero: "NB",
        cuotaPaga: true
    }
];
let sociosDeudores = []

let formulario;
let inputNroSocio;
let inputNombre;
let inputApellido;
let inputEdad;
let inputGenero;
let inputCuotaPaga;
let contenedorSocios;

class Socio {
    constructor(nroSocio, nombre, apellido, edad, genero, cuotaPaga) {
        this.nroSocio = nroSocio;
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = edad;
        this.genero = genero;
        this.cuotaPaga = cuotaPaga;
    }
}

function inicializarElementos() {
    formulario = document.getElementById("formulario");
    inputNroSocio = document.getElementById("inputNroSocio");
    inputNombre = document.getElementById("inputNombreSocio");
    inputApellido = document.getElementById("inputApellidoSocio");
    inputEdad = document.getElementById("inputEdad");
    inputGenero = document.getElementById("inputGenero");
    inputCuotaPaga = document.getElementById("inputCuotaPaga");
    contenedorSocios = document.getElementById("contenedorSocios");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault();
    let nroSocio = parseInt(inputNroSocio.value);
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let edad = parseInt(inputEdad.value);
    let genero
    let cuotaPaga

    if (document.getElementById("genero-m").checked) {
        genero = "F"
    } else if (document.getElementById("genero-h").checked) {
        genero = "M"
    } else if (document.getElementById("genero-nb").checked) {
        genero = "NB"
    }

    if (document.getElementById("cuotaPaga").checked) {
        cuotaPaga = true
    } else if (document.getElementById("cuotaNoPaga").checked) {
        cuotaPaga = false
    }


    const idExiste = socios.some((socio) => socio.nroSocio === nroSocio);
    if (!idExiste) {
        let socio = new Socio(
            nroSocio,
            nombre,
            apellido,
            edad,
            genero,
            cuotaPaga
        );

        socios.push(socio);
        formulario.reset();

    } else {
        alert("El id ya existe");
    }
}

function eliminarSocio(nroSocio) {
    let indiceBorrar = socios.findIndex(
        (socio) => Number(socio.nroSocio) === Number(nroSocio)
    );
    socios.splice(indiceBorrar, 1);
}

function botonCerrar(elem, id) {
    const botonCerrar = document.getElementById(id)
    botonCerrar.onclick = () => {
        elem.remove()
    }
}

function buscarSocio(nro) {
    let elementoEncontrado = socios.find(
        (socio) => socio.nroSocio == nro
    )
    return elementoEncontrado
}

function mostrarSocio(elementoEncontrado) {
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nº de socio: <b>${elementoEncontrado.nroSocio}</b></p>
                <p class="card-text">Nombre: <b>${elementoEncontrado.nombre}</b></p>
                <p class="card-text">Apellido: <b>${elementoEncontrado.apellido}</b></p>
                <p class="card-text">Edad: <b>${elementoEncontrado.edad}</b></p>
                <p class="card-text">Género: <b>${elementoEncontrado.genero}</b></p>
                <p class="card-text">¿Cuota paga?: <b>${elementoEncontrado.cuotaPaga}</b></p>
            </div>
        </div>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrar.append(cartel)
    return cartel
}

function contar(letra) {
    dato = 0
    for (const socio of socios) {
        if (socio.genero === letra) {
            dato += 1
        }
    }
    return dato
}

const contenedorMostrar = document.getElementById("contenedor-mostrar")

//section GESTION SOCIOS inicio
let botonBuscarDatosSocio = document.getElementById("buscar-datos-socio")       //BUSCAR DATOS SOCIO
botonBuscarDatosSocio.onclick = () => {
    let nro = parseInt(prompt("Ingrese el numero de socio a buscar: "))
    botonCerrar(mostrarSocio(buscarSocio(nro)), "boton-cerrar")
}

let botonAgregarSocio = document.getElementById("agregar-socio")                //AGREGAR NUEVO SOCIO
botonAgregarSocio.onclick = () => {
    let formu = document.getElementById("form-agregar-socio")
    formu.innerHTML = `
    <h3>Formulario ingreso</h3>
    <form id="formulario">
        <div class="mb-3">
            <label class="form-label">Nº de socio</label>
            <input type="text" class="form-control" id="inputNroSocio" placeholder="nº de Socio" required />
        </div>
        <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" id="inputNombreSocio" placeholder="Nombre" required />
        </div>
        <div class="mb-3">
            <label class="form-label">Apellido</label>
            <input type="text" class="form-control" id="inputApellidoSocio" placeholder="Apellido" required />
        </div>

        <div class="mb-3">
            <label class="form-label">Edad</label>
            <input type="number" class="form-control" id="inputEdad" placeholder=Edad" required />
        </div>

        <div>
            <label class="form-label">Género</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="genero" id="genero-m" value="option1">
            <label class="form-check-label" for="exampleRadios1">Mujer</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="genero" id="genero-h" value="option2">
            <label class="form-check-label" for="exampleRadios1">Hombre</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="radio" name="genero" id="genero-nb" value="option3">
            <label class="form-check-label" for="exampleRadios2">No binarie</label>
        </div>

        <div>
            <label class="form-label">¿Pagó cuota?</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="cuotaPaga" value="option1">
            <label class="form-check-label" for="exampleRadios1">Sí</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="radio" name="exampleRadios" id="cuotaNoPaga" value="option2">
            <label class="form-check-label" for="exampleRadios2">No</label>
        </div>

        <div class="mb-3">
            <button type="submit" class="btn btn-primary" id="boton-registrar">Registrar</button>
        </div>
    </form>
    `
    inicializarElementos();
    inicializarEventos();

    let botonRegistrar = document.getElementById("boton-registrar")
    botonRegistrar.onclick = () => {
        alert("Socio registrado")
    }
}

let botonEliminarSocio = document.getElementById("eliminar-socio")              //ELIMINAR SOCIO
botonEliminarSocio.onclick = () => {
    let nro = parseInt(prompt("Ingrese el numero de socio a eliminar"))
    eliminarSocio(nro)
    alert("Socio eliminado")
}
/*
let botonCambiarDatosSocio = document.getElementById("cambiar-datos-socio")     //CAMBIAR INFO DE SOCIO
botonCambiarDatosSocio.onclick = () => {
    let nro = parseInt(prompt("Ingrese el numero de socio a cambiar datos"))
    let elementoEncontrado = socios.find(
        (socio) => socio.nroSocio == nro
    )
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <h3>Seleccione el dato a cambiar</h3>
        <div class="card">
            <div class="card-body">
                <p class="card-text"><button class="btn btn-primary" id="nro-socio">Nº de socio:</button><b> ${elementoEncontrado.nroSocio}</b></p>
                <p class="card-text"><button class="btn btn-primary" id="nombre">Nombre:</button><b> ${elementoEncontrado.nombre}</b></p>
                <p class="card-text"><button class="btn btn-primary" id="apellido">Apellido:</button><b> ${elementoEncontrado.apellido}</b></p>
                <p class="card-text"><button class="btn btn-primary" id="edad">Edad:</button>Edad: <b> ${elementoEncontrado.edad}</b></p>
                <p class="card-text"><button class="btn btn-primary" id="genero">Género:</button><b> ${elementoEncontrado.genero}</b></p>
                <p class="card-text"><button class="btn btn-primary" id="cuota-paga">¿Cuota paga?:</button><b> ${elementoEncontrado.cuotaPaga}</b></p>
            </div>
        </div>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrar.append(cartel)
    
    let botonNroSocio = document.getElementById("nro-socio")
    botonNroSocio.onclick = () => {
        
    }

    botonCerrar(cartel, "boton-cerrar")
}
*/
//section GESTION SOCIOS fin

//section ESTADISTICAS inicio
let botonSociosPorGenero = document.getElementById("socios-por-genero")         //CANTIDAD SOCIOS POR GENERO
botonSociosPorGenero.onclick = () => {
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>Cantidad de mujeres: ${contar("F")} - Porcentaje respecto al total: ${Math.floor((contar("F") / socios.length) * 100)}%</p>
        <p>Cantidad de hombres: ${contar("M")} - Porcentaje respecto al total: ${Math.floor((contar("M") / socios.length) * 100)}%</p>
        <p>Cantidad de personas no binarias: ${contar("NB")} - Porcentaje respecto al total: ${Math.floor((contar("NB") / socios.length) * 100)}%</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrar.append(cartel)
    botonCerrar(cartel, "boton-cerrar")
}

let botonPromedioEdades = document.getElementById("promedio-edades")            //PROMEDIO EDADES
botonPromedioEdades.onclick = () => {
    let totalEdades = 0
    for (const socio of socios) {
        totalEdades += socio.edad
    }
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>El promedio de edades de los socios es de ${totalEdades} años</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrar.append(cartel)

    botonCerrar(cartel, "boton-cerrar")
}
//section ESTADISTICAS fin

//section CUOTAS inicio
let botonCostoCuota = document.getElementById("cambio-costo-cuota")              //CAMBIAR COSTO CUOTA
botonCostoCuota.onclick = () => {
    valorCuota = parseFloat(prompt("Ingrese el nuevo valor de la cuota"))
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>El nuevo valor de la cuota es $${valorCuota}</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrar.append(cartel)

    botonCerrar(cartel, "boton-cerrar")
}

let botonListaDeudores = document.getElementById("lista-deudores")              //LISTA DEUDORES MES EN CURSO
botonListaDeudores.onclick = () => {
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <h3>Lista de deudores</h3>
        <div id="mostrar-deudores"></div>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrar.append(cartel)

    botonCerrar(cartel, "boton-cerrar")

    sociosDeudores.splice(0, sociosDeudores.length)
    for (const socio of socios) {
        if (socio.cuotaPaga === false) {
            sociosDeudores.push(socio)
        }
    }
    const deudores = document.getElementById("mostrar-deudores")
    sociosDeudores.forEach((elemento) => {
        let column = document.createElement("div")
        column.className = "col-md-12 mt-3"
        column.id = `columna-${elemento.nroSocio}`
        column.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Nº de socio: <b>${elemento.nroSocio}</b></p>
                    <p class="card-text">Nombre: <b>${elemento.nombre}</b></p>
                    <p class="card-text">Apellido: <b>${elemento.apellido}</b></p>
                    <p class="card-text">Edad: <b>${elemento.edad}</b></p>
                    <p class="card-text">Género: <b>${elemento.genero}</b></p>
                </div>
            </div>
        `
        deudores.append(column)
    })
}

let botonTotalRecaudaciones = document.getElementById("total-recaudaciones")    //TOTAL RECAUDACIONES MES EN CURSO
botonTotalRecaudaciones.onclick = () => {
    let totalRecaud = 0
    for (const socio of socios) {
        if (socio.cuotaPaga === true) {
            totalRecaud += valorCuota
        }
    }
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>El total recaudado en concepto de cuotas de este mes es de $${totalRecaud}</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrar.append(cartel)

    botonCerrar(cartel, "boton-cerrar")
}
//section CUOTAS fin