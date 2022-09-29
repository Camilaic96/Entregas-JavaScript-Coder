// Variables de informaciónlet
let socios = [{
        nroSocio: 1,
        nombre: "CAM",
        apellido: "CUE",
        edad: 28,
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
    },
    {
        nroSocio: 5,
        nombre: "CAM",
        apellido: "CUE",
        edad: 12,
        genero: "F",
        cuotaPaga: false
    },
    {
        nroSocio: 6,
        nombre: "FAT",
        apellido: "CUE",
        edad: 2,
        genero: "F",
        cuotaPaga: false
    },
];
let sociosDeudores = []
let usuario
let valorCuota = 1000

let socioACambiar

let formularioCambioCostoCuota

let numero

// Variables para elementos de autenticación y usuario
let formularioIdentificacion;
let contenedorIdentificacion;
let contenedorUsuario;
let textoUsuario;
let botonLimpiarStorage

// Variables para formulario de socios
let formulario;
let inputNroSocio;
let inputNombre;
let inputApellido;
let inputEdad;
let inputGenero;
let inputCuotaPaga;
let contenedorSocios;

let formularioCambio;
let inputNroSocioCambio;
let inputNombreCambio;
let inputApellidoCambio;
let inputEdadCambio;
let inputGeneroCambio;
let inputCuotaPagaCambio;
let contenedorSociosCambio;

let contenedorBuscarSocioCambio;

//variables botones
let contenedorMostrarEstad
let contenedorMostrarGestionSocios
let contenedorMostrarCuotas
let botonBuscarDatosSocio
let botonAgregarSocio
let botonEliminarSocio
let botonCambiarDatosSocio
let botonSociosPorGenero
let botonPromedioEdades
let botonCostoCuota
let botonListaDeudores
let botonTotalRecaudaciones

let graficaSociosPorGenero

let formularioCambioNSocio
let formularioCambioNombre
let formularioCambioApellido
let formularioCambioEdad
let formularioCambioGenero
let formularioCambioCuotaPaga

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
    formularioIdentificacion = document.getElementById("formularioIdentificacion")
    inputUsuario = document.getElementById("inputUsuario")
    contenedorIdentificacion = document.getElementById("contenedorIdentificacion")
    contenedorUsuario = document.getElementById("contenedorUsuario")
    textoUsuario = document.getElementById("textoUsuario")

    botonLimpiarStorage = document.getElementById("limpiarStorage")

    formulario = document.getElementById("formulario-ingreso-socio")
    inputNroSocio = document.getElementById("inputNroSocio")
    inputNombre = document.getElementById("inputNombreSocio")
    inputApellido = document.getElementById("inputApellidoSocio")
    inputEdad = document.getElementById("inputEdad")
    inputGenero = document.getElementById("inputGenero")
    inputCuotaPaga = document.getElementById("inputCuotaPaga")
    contenedorSocios = document.getElementById("contenedorSocios")
    contenedorFormIngreso = document.getElementById("contenedor-form-ingreso")

    contenedorBuscarSocioCambio = document.getElementById("contenedor-buscar-socio-cambio")

    formularioCambio = document.getElementById("formulario-cambio")
    inputNroSocioCambio = document.getElementById("inputNroSocioCambio")
    inputNombreCambio = document.getElementById("inputNombreCambio")
    inputApellidoCambio = document.getElementById("inputApellidoCambio")
    inputEdadCambio = document.getElementById("inputEdadCambio")
    inputGeneroCambioM = document.getElementById("inputGeneroCambioM")
    inputGeneroCambioH = document.getElementById("inputGeneroCambioH")
    inputGeneroCambioNB = document.getElementById("inputGeneroCambioNB")
    inputCuotaPagaCambio = document.getElementById("inputCuotaPaga-cambio")
    contenedorSociosCambio = document.getElementById("contenedorSocios-cambio")
    contenedorFormIngresoCambio = document.getElementById("contenedor-form-cambio")

    contenedorMostrarEstad = document.getElementById("cont-mostrar-estadisticas")
    contenedorMostrarGestionSocios = document.getElementById("cont-mostrar-gestion-socios")
    contenedorMostrarCuotas = document.getElementById("cont-mostrar-cuotas")
    botonBuscarDatosSocio = document.getElementById("buscar-datos-socio")
    botonAgregarSocio = document.getElementById("agregar-socio")
    botonEliminarSocio = document.getElementById("eliminar-socio")
    botonCambiarDatosSocio = document.getElementById("cambiar-datos-socio")
    botonSociosPorGenero = document.getElementById("socios-por-genero")
    botonPromedioEdades = document.getElementById("promedio-edades")
    botonCostoCuota = document.getElementById("cambio-costo-cuota")
    botonListaDeudores = document.getElementById("lista-deudores")
    botonTotalRecaudaciones = document.getElementById("total-recaudaciones")
    botonRegistrarSocio = document.getElementById("boton-registrar")

    graficaSociosPorGenero = document.getElementById("graf-socios-por-genero")
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event)
    formularioCambio.onsubmit = (event) => validarFormularioCambio(event)
    botonBuscarDatosSocio.onclick = buscarDatosSocio
    botonAgregarSocio.onclick = agregarSocio
    botonEliminarSocio.onclick = elimSocio
    botonCambiarDatosSocio.onclick = cambiarDatosSocio
    botonSociosPorGenero.onclick = sociosPorGenero
    botonPromedioEdades.onclick = promedioEdades
    botonCostoCuota.onclick = costoCuota
    botonListaDeudores.onclick = listaDeudores
    botonTotalRecaudaciones.onclick = totalRecaudaciones
    formularioIdentificacion.onsubmit = (event) => identificarUsuario(event)
    botonLimpiarStorage.onclick = eliminarStorage
}

function eliminarStorage() {
    localStorage.clear()
    usuario = ""
    socios = []
    mostrarFormularioIdentificacion()
    contenedorSocios.innerHTML = ""
}

function identificarUsuario(event) {
    event.preventDefault();
    usuario = inputUsuario.value;
    formularioIdentificacion.reset();
    actualizarUsuarioStorage();
    mostrarTextoUsuario();
}

function mostrarTextoUsuario() {
    contenedorIdentificacion.hidden = true;
    contenedorUsuario.hidden = false;
    textoUsuario.innerHTML += ` ${usuario}`;
}

function mostrarFormularioIdentificacion() {
    contenedorIdentificacion.hidden = false;
    contenedorUsuario.hidden = true;
    textoUsuario.innerHTML = ``;
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

    const idExiste = socios.some((socio) => socio?.nroSocio === nroSocio);
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
        actualizarSociosStorage()
    } else {
        alert("El id ya existe");
    }
}

function botonCerrarCartel(elem, id, btn) {
    const botonCerrar = document.getElementById(id)
    botonCerrar.onclick = () => {
        elem.remove()
        btn.disabled = false
    }
}

function cerrar(id, boton, contenedor) {
    let botonCerrar = document.getElementById(id)
    botonCerrar.onclick = () => {
        boton.disabled = false
        contenedor.hidden = true
    }
}

function buscarSocio(nro) {
    let elementoEncontrado = socios.find((socio) => socio?.nroSocio == nro)
    if (elementoEncontrado) {
        return elementoEncontrado
    } else {
        return -1
    }
}

function mostrarSocio(elementoEncontrado, mensaje) {
    let cartel = document.createElement("div")
    if (elementoEncontrado != -1) {
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
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">${mensaje}</button>
        `
        contenedorMostrarGestionSocios.append(cartel)
    } else {
        cartel.innerHTML = `
            <p>No existe</p>
            <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
            `
        contenedorMostrarGestionSocios.append(cartel)
    }
    return cartel
}

//section GESTION SOCIOS inicio
//BUSCAR DATOS SOCIO
function buscarDatosSocio() {
    botonBuscarDatosSocio.disabled = true
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <div class="border border-success w-50 p-3 mx-auto">
            <p>Ingrese el número de socio a buscar</p>
            <form id="formulario-buscar-socio" class="d-flex justify-content-center">
                <div>
                    <input type="text" class="form-control" id="inputBuscarSocio" placeholder="Nº socio" required />
                </div>
                <div>
                    <button type="button" class="btn btn-success" id="buscar-dato-socio">Buscar</button>
                </div>
            </form>
            <button type="button" class="btn btn-success m-4" id="boton-cancelar">Cancelar</button>
        </div>
        `
    contenedorMostrarGestionSocios.append(cartel)
    botonCerrarCartel(cartel, "boton-cancelar", botonBuscarDatosSocio)
    let botonBuscarSocio = document.getElementById("buscar-dato-socio")
    botonBuscarSocio.onclick = () => {
        let nro = parseInt(inputBuscarSocio.value)
        cartel.innerHTML = ''
        botonCerrarCartel(mostrarSocio(buscarSocio(nro), "Cerrar"), "boton-cerrar", botonBuscarDatosSocio)
    }
}

//AGREGAR NUEVO SOCIO
function agregarSocio() {
    if (usuario) {
        botonAgregarSocio.disabled = true
        contenedorFormIngreso.hidden = false 
        cerrar("boton-cerrar-form", botonAgregarSocio, contenedorFormIngreso)
        cerrar("boton-registrar", botonAgregarSocio, contenedorFormIngreso)
    } else {
        alert("Identifíquese antes de registrar un nuevo socio");
    }
}

//ELIMINAR SOCIO
function eliminarSocio(nroSocio) {
    let indiceBorrar = socios.findIndex((socio) => Number(socio?.nroSocio) === Number(nroSocio));
    if (indiceBorrar != -1) {
        socios.splice(indiceBorrar, 1)
        actualizarSociosStorage()
    }
}

function elimSocio() {
    if (usuario) {
        botonEliminarSocio.disabled = true
        let cartel = document.createElement("div")
        cartel.innerHTML = `
        <div class="border border-success w-50 p-3 mx-auto">
            <p>Ingrese el número de socio a eliminar</p>
            <form id="formulario-eliminar-socio" class="d-flex justify-content-center">
                <div>
                    <input type="text" class="form-control" id="inputEliminarSocio" placeholder="Nº socio" required />
                </div>
                <div>
                    <button type="button" class="btn btn-success" id="boton-eliminar-socio">Eliminar</button>
                </div>
            </form>
            <button type="button" class="btn btn-success m-4" id="boton-cancelar-eliminar">Cancelar</button>
        </div>
        `
        contenedorMostrarGestionSocios.append(cartel)
        botonCerrarCartel(cartel, "boton-cancelar-eliminar", botonEliminarSocio)
        formularioEliminarSocio = document.getElementById("formulario-eliminar-socio")
        let botonElimSocio = document.getElementById("boton-eliminar-socio")
        botonElimSocio.onclick = () => {
            let nro = parseInt(inputEliminarSocio.value)
            cartel.innerHTML = ''
            botonCerrarCartel(mostrarSocio(buscarSocio(nro), "Eliminar"), "boton-cerrar", botonEliminarSocio)
            eliminarSocio(nro)
        }
    } else {
        alert("Identifíquese antes de eliminar un socio");
    }
}

function crearTextoForm(dato) {
    let textoNSocio = document.createElement("div")
    textoNSocio.innerHTML = `<p class="card-text">Nº de socio: <b>${dato.nroSocio}</b></p>`
    let contenedorTextoNSocio = document.getElementById("text-nSocio-cambiar")
    contenedorTextoNSocio.append(textoNSocio)

    let textoNombre = document.createElement("div")
    textoNombre.innerHTML = `<p class="card-text">Nombre: <b>${dato.nombre}</b></p>`
    let contenedorTextoNombre = document.getElementById("text-nombre-cambiar")
    contenedorTextoNombre.append(textoNombre)

    let textoApellido = document.createElement("div")
    textoApellido.innerHTML = `<p class="card-text">Apellido: <b>${dato.apellido}</b></p>`
    let contenedorTextoApellido = document.getElementById("text-apellido-cambiar")
    contenedorTextoApellido.append(textoApellido)

    let textoEdad = document.createElement("div")
    textoEdad.innerHTML = `<p class="card-text">Edad: <b>${dato.edad}</b></p>`
    let contenedorTextoEdad = document.getElementById("text-edad-cambiar")
    contenedorTextoEdad.append(textoEdad)

    let textoGenero = document.createElement("div")
    textoGenero.innerHTML = `<p class="card-text">Género: <b>${dato.genero}</b></p>`
    let contenedorTextoGenero = document.getElementById("text-genero-cambiar")
    contenedorTextoGenero.append(textoGenero)

    let textoCuotaPaga = document.createElement("div")
    textoCuotaPaga.innerHTML = `<p class="card-text">¿Cuota paga?: <b>${dato.cuotaPaga}</b></p>`
    let contenedorTextoCuotaPaga = document.getElementById("text-cuotaPaga-cambiar")
    contenedorTextoCuotaPaga.append(textoCuotaPaga)
}

function validarFormularioCambio(event) {
    event.preventDefault();
    let nroSocioCambio = parseInt(inputNroSocioCambio.value) || socioACambiar.nroSocio
    let nombreCambio = inputNombreCambio.value || socioACambiar.nombre
    let apellidoCambio = inputApellidoCambio.value || socioACambiar.apellido
    let edadCambio = parseInt(inputEdadCambio.value) || socioACambiar.edad
    let generoCambio
    let cuotaPagaCambio

    if (inputGeneroCambioM.checked) {
        generoCambio = "F"
    } else if (inputGeneroCambioH.checked) {
        generoCambio = "M"
    } else if (inputGeneroCambioNB.checked) {
        generoCambio = "NB"
    } else {
        generoCambio = socioACambiar.genero
    }

    if (inputCuotaPagaCambioSi.checked) {
        cuotaPagaCambio = true
    } else if (inputCuotaPagaCambioNo.checked) {
        cuotaPagaCambio = false
    } else {
        cuotaPagaCambio = socioACambiar.cuotaPaga
    }

    eliminarSocio(numero)
    let socio = new Socio(
        nroSocioCambio,
        nombreCambio,
        apellidoCambio,
        edadCambio,
        generoCambio,
        cuotaPagaCambio
    );
    socios.push(socio);
    formularioCambio.reset()
    actualizarSociosStorage()
    botonCambiarDatosSocio.disabled = false
    contenedorFormIngresoCambio.hidden = true
}

//CAMBIAR INFO DE SOCIO
function cambiarDatosSocio() {
    if (usuario) {
        botonCambiarDatosSocio.disabled = true
        contenedorBuscarSocioCambio.hidden = false
        
        cerrar("boton-cancelar-cambiar", botonCambiarDatosSocio, contenedorBuscarSocioCambio)

        let botonCamb = document.getElementById("buscar-socio")
        botonCamb.onclick = () => {
            numero = parseInt(inputBuscarSocioCambio.value)
            socioACambiar = {... buscarSocio(numero)}
            crearTextoForm(socioACambiar)
            contenedorBuscarSocioCambio.hidden = true
            contenedorFormIngresoCambio.hidden = false
        }
        cerrar("boton-cerrar-form-cambio", botonCambiarDatosSocio, contenedorFormIngresoCambio)
    } else {
        alert("Identifíquese antes de cambiar datos de un socio");
    }
}
//section GESTION SOCIOS fin

//section ESTADISTICAS inicio
//CANTIDAD SOCIOS POR GENERO
function contar(letra) {
    dato = 0
    for (const socio of socios) { socio?.genero === letra && dato++ }
    return dato
}

function mostrarGrafica(value, cantMuj, cantHom, cantNB) {
    graficaSociosPorGenero.hidden = value
    let xValues = ["Mujeres", "Hombres", "No binarixs"];
    let yValues = [cantMuj, cantHom, cantNB];
    let barColors = ["red", "green", "yellow"];
    new Chart("graf-socios-por-genero", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Cantidad de socios por género"
            }
        }
    });
}

function sociosPorGenero() {
    botonSociosPorGenero.disabled = true
    mostrarGrafica(false, contar("F"), contar("M"), contar("NB"))
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>Cantidad de mujeres: ${contar("F")} - Porcentaje respecto al total: ${Math.floor((contar("F") / socios.length) * 100)}%</p>
        <p>Cantidad de hombres: ${contar("M")} - Porcentaje respecto al total: ${Math.floor((contar("M") / socios.length) * 100)}%</p>
        <p>Cantidad de personas no binarias: ${contar("NB")} - Porcentaje respecto al total: ${Math.floor((contar("NB") / socios.length) * 100)}%</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrarEstad.append(cartel)
    const botonCerrarC = document.getElementById("boton-cerrar")
    botonCerrarC.onclick = () => {
        mostrarGrafica(true, contar("F"), contar("M"), contar("NB"))
        cartel.remove()
        botonSociosPorGenero.disabled = false
    }
}

//PROMEDIO EDADES
function promedioEdades() {
    botonPromedioEdades.disabled = true
    let totalEdades = 0
    for (const socio of socios) {totalEdades += socio?.edad}
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>El promedio de edades de los socios es de ${parseInt(totalEdades / socios.length)} años</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrarEstad.append(cartel)

    botonCerrarCartel(cartel, "boton-cerrar", botonPromedioEdades)
}
//section ESTADISTICAS fin

//section CUOTAS inicio
//CAMBIAR COSTO CUOTA
function guardarCambioCostoCuota(cartel) {
    let botonGuardarCostoCuota = document.getElementById("guardar-costo-cuota")
    botonGuardarCostoCuota.onclick = () => {
        valorCuota = parseInt(inputCostoCuota.value)
        cartel.innerHTML = `
            <p>El nuevo valor de la cuota es $${valorCuota}</p>
            <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
            `
        botonCerrarCartel(cartel, "boton-cerrar", botonCostoCuota)
        actualizarValorCuotaStorage()
    }
}

function costoCuota() {
    if (usuario) {
        formularioCambioCostoCuota = document.getElementById("formulario-costo-cuota")
        let cartel = document.createElement("div")
        cartel.innerHTML = `
        <div class="border border-success w-50 p-3 mx-auto">
            <p>El valor actual de la cuota es $${valorCuota}</p>
            <form id="formulario-costo-cuota" class="d-flex justify-content-center">
                <div>
                    <input type="text" class="form-control" id="inputCostoCuota" placeholder="Nuevo valor cuota" required />
                </div>
                <div>
                    <button type="button" class="btn btn-success" id="guardar-costo-cuota">Guardar</button>
                </div>
            </form>
            <button type="button" class="btn btn-success m-4" id="boton-cancelar">Cancelar</button>
        </div>
        `
        contenedorMostrarCuotas.append(cartel)
        botonCerrarCartel(cartel, "boton-cancelar", botonCostoCuota)
        guardarCambioCostoCuota(cartel)
    } else {
        alert("Identifíquese antes de actualizar el costo actual de la cuota");
    }
}

//LISTA DEUDORES MES EN CURSO
function cargarListaDeudores() {
    sociosDeudores.splice(0, sociosDeudores.length)
    for (const socio of socios) { socio?.cuotaPaga === false && sociosDeudores.push(socio)}
}

function mostrarListaDeudores() {
    const deudores = document.getElementById("mostrar-deudores")
    sociosDeudores.forEach((elemento) => {
        let column = document.createElement("div")
        column.className = "m-3"
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

function listaDeudores() {
    botonListaDeudores.disabled = true
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <h3>Lista de deudores</h3>
        <div id="mostrar-deudores"></div>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrarCuotas.append(cartel)
    botonCerrarCartel(cartel, "boton-cerrar", botonListaDeudores)
    cargarListaDeudores()
    mostrarListaDeudores()
}

//TOTAL RECAUDACIONES MES EN CURSO
calcularRecaudacion = () => {
    let totalRecaud = 0
    for (const socio of socios) {
        if (socio?.cuotaPaga === true) {
            totalRecaud += valorCuota
        }
    }
    return totalRecaud
}

function totalRecaudaciones() {
    botonTotalRecaudaciones.disabled = true
    let cartel = document.createElement("div")
    cartel.innerHTML = `
    <div class="border border-success w-50 p-3 mx-auto">
        <p>El total recaudado en concepto de cuotas de este mes es de $${calcularRecaudacion()}</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    </div>
    `
    contenedorMostrarCuotas.append(cartel)
    botonCerrarCartel(cartel, "boton-cerrar", botonTotalRecaudaciones)
}
//section CUOTAS fin

function actualizarSociosStorage() {
    let sociosJSON = JSON.stringify(socios);
    localStorage.setItem("socios", sociosJSON);
}

function actualizarUsuarioStorage() {
    localStorage.setItem("usuario", usuario);
}

function actualizarValorCuotaStorage() {
    localStorage.setItem("valorCuota", valorCuota);
}

function obtenerSociosStorage() {
    let sociosJSON = localStorage.getItem("socios");
    if (sociosJSON) {
        productos = JSON.parse(sociosJSON);
    }
}

function obtenerUsuarioStorage() {
    let usuarioAlmacenado = localStorage.getItem("usuario");
    if (usuarioAlmacenado) {
        usuario = usuarioAlmacenado;
        mostrarTextoUsuario();
    }
}

function obtenerValorCuotaStorage() {
    let valorCuotaAlmacenado = localStorage.getItem("valorCuota");
    if (valorCuotaAlmacenado) {
        valorCuota = parseInt(valorCuotaAlmacenado);
    }
}

function main() {
    inicializarElementos()
    inicializarEventos()
    obtenerSociosStorage()
    cargarListaDeudores()
    obtenerUsuarioStorage()
    actualizarSociosStorage()
    obtenerValorCuotaStorage()
}

main()