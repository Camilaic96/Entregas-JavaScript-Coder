// Variables de informaciónlet
let socios = [];
let sociosDeudores = []
let usuario
let valorCuota = 1000

let socioACambiar

let formularioCambioCostoCuota

let formularioBuscarSocio

let numero

// Variables para elementos de autenticación y usuario
let formularioIdentificacion;
let contenedorIdentificacion;
let inputUsuario
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
let contenedorFormIngreso;

// Variables para formulario de socios
let formularioCambio;
let inputNroSocioCambio;
let inputNombreCambio;
let inputApellidoCambio;
let inputEdadCambio;
let inputGeneroCambioM;
let inputGeneroCambioH;
let inputGeneroCambioNB;
let inputCuotaPagaCambio;
let contenedorBuscarSocioCambio;
let contenedorFormIngresoCambio;

let contenedorMostrarEstad
let contenedorMostrarGestionSocios
let contenedorMostrarCuotas

//variables botones
let botonBuscarDatosSocio
let botonAgregarSocio
let botonEliminarSocio
let botonCambiarDatosSocio
let botonSociosPorGenero
let botonPromedioEdades
let botonCostoCuota
let botonListaDeudores
let botonTotalRecaudaciones
let botonRegistrarSocio

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

function botonesDesactivados(value) {
    botonBuscarDatosSocio.disabled = value
    botonAgregarSocio.disabled = value
    botonEliminarSocio.disabled = value
    botonCambiarDatosSocio.disabled = value
    botonSociosPorGenero.disabled = value
    botonPromedioEdades.disabled = value
    botonCostoCuota.disabled = value
    botonListaDeudores.disabled = value
    botonTotalRecaudaciones.disabled = value
}

//USUARIO
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

//section GESTION SOCIOS
function buscarSocio(nro) {
    let elementoEncontrado = socios.find((socio) => socio?.nroSocio === nro)
    return elementoEncontrado !== undefined ? elementoEncontrado : -1
}

function buscarDatosSocio() {
    botonesDesactivados(true)
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
    botonCerrarCartel(cartel, "boton-cancelar")

    let botonBuscarSocio = document.getElementById("buscar-dato-socio")
    botonBuscarSocio.onclick = () => {
        let nro = parseInt(inputBuscarSocio.value)
        if (buscarSocio(nro) !== -1) {
            mostrarSocioSA(buscarSocio(nro), 'Socio encontrado')
        } else {
            mensajeError('No existe el socio')
        }
        inputBuscarSocio.value = ''
        cartel.remove()
        botonesDesactivados(false)
    }
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
        registrarSocioServer(socio)
    } else {
        formulario.reset()
        mensajeError('El id ya existe')
    }
}

function agregarSocio() {
    if (usuario) {
        botonesDesactivados(true)
        contenedorFormIngreso.hidden = false
        cerrar("boton-cerrar-form", contenedorFormIngreso)
        formulario.reset()
    } else {
        mensajeError('Identifíquese antes de registrar un nuevo socio')
    }
}

function eliminarSocio(nroSocio) {
    let indiceBorrar = socios.findIndex((socio) => Number(socio?.nroSocio) === Number(nroSocio));
    if (indiceBorrar !== -1) {
        socios.splice(indiceBorrar, 1)
    }
}

function elimSocio() {
    if (usuario) {
        botonesDesactivados(true)
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
        botonCerrarCartel(cartel, "boton-cancelar-eliminar")
        formularioEliminarSocio = document.getElementById("formulario-eliminar-socio")
        let botonElimSocio = document.getElementById("boton-eliminar-socio")
        botonElimSocio.onclick = () => {
            let nro = parseInt(inputEliminarSocio.value)
            if (buscarSocio(nro) !== -1) {
                confirmarEliminacion(buscarSocio(nro))
            } else {
                mensajeError('No existe el socio')
            }
            formularioEliminarSocio.reset()
            cartel.remove()
            botonesDesactivados(false)
        }

    } else {
        mensajeError('Identifíquese antes de eliminar un socio')
    }
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

    const idExiste = socios.some((socio) => socio?.nroSocio === numero);
    if (idExiste) {
        let indiceCambiar = socios.findIndex((socio) => Number(socio?.nroSocio) === Number(numero));
        eliminarSocio(numero)
        let socio = new Socio(
            nroSocioCambio,
            nombreCambio,
            apellidoCambio,
            edadCambio,
            generoCambio,
            cuotaPagaCambio
        );
        cambiarDatosSociosServer(socio, indiceCambiar)
    }
}

function crearTextoForm(dato) {
    let textoNSocio = document.createElement("div")
    textoNSocio.innerHTML = `<p class="card-text">Nº de socio: <b>${dato.nroSocio}</b></p>`
    let contenedorTextoNSocio = document.getElementById("text-nSocio-cambiar")
    contenedorTextoNSocio.replaceChild(textoNSocio, contenedorTextoNSocio.childNodes[0])

    let textoNombre = document.createElement("div")
    textoNombre.innerHTML = `<p class="card-text">Nombre: <b>${dato.nombre}</b></p>`
    let contenedorTextoNombre = document.getElementById("text-nombre-cambiar")
    contenedorTextoNombre.replaceChild(textoNombre, contenedorTextoNombre.childNodes[0])

    let textoApellido = document.createElement("div")
    textoApellido.innerHTML = `<p class="card-text">Apellido: <b>${dato.apellido}</b></p>`
    let contenedorTextoApellido = document.getElementById("text-apellido-cambiar")
    contenedorTextoApellido.replaceChild(textoApellido, contenedorTextoApellido.childNodes[0])

    let textoEdad = document.createElement("div")
    textoEdad.innerHTML = `<p class="card-text">Edad: <b>${dato.edad}</b></p>`
    let contenedorTextoEdad = document.getElementById("text-edad-cambiar")
    contenedorTextoEdad.replaceChild(textoEdad, contenedorTextoEdad.childNodes[0])

    let textoGenero = document.createElement("div")
    textoGenero.innerHTML = `<p class="card-text">Género: <b>${dato.genero}</b></p>`
    let contenedorTextoGenero = document.getElementById("text-genero-cambiar")
    contenedorTextoGenero.replaceChild(textoGenero, contenedorTextoGenero.childNodes[0])

    let textoCuotaPaga = document.createElement("div")
    textoCuotaPaga.innerHTML = `<p class="card-text">¿Cuota paga?: <b>${dato.cuotaPaga}</b></p>`
    let contenedorTextoCuotaPaga = document.getElementById("text-cuotaPaga-cambiar")
    contenedorTextoCuotaPaga.replaceChild(textoCuotaPaga, contenedorTextoCuotaPaga.childNodes[0])
}

function cambiarDatosSocio() {
    if (usuario) {
        botonesDesactivados(true)
        formularioCambio = document.getElementById("formulario-cambio")
        contenedorBuscarSocioCambio.hidden = false
        cerrar("boton-cancelar-cambiar", contenedorBuscarSocioCambio)
        let botonCamb = document.getElementById("buscar-socio")
        botonCamb.onclick = () => {
            numero = parseInt(inputBuscarSocioCambio.value)
            if (buscarSocio(numero) !== -1) {
                socioACambiar = {
                    ...buscarSocio(numero)
                }
                crearTextoForm(socioACambiar)
                contenedorBuscarSocioCambio.hidden = true
                contenedorFormIngresoCambio.hidden = false
            } else {
                contenedorBuscarSocioCambio.hidden = true
                contenedorFormIngresoCambio.hidden = true
                mensajeError('No existe el socio')
            }
            inputBuscarSocioCambio.value = ''
            botonesDesactivados(false)
        }
        cerrar("boton-cerrar-form-cambio", contenedorFormIngresoCambio)
    } else {
        mensajeError('Identifíquese antes de cambiar datos de un socio')
    }
}

//section ESTADISTICAS
contar = (letra) => {
    dato = 0
    for (const socio of socios) {
        socio?.genero === letra && dato++
    }
    return dato
}

function sociosPorGenero() {
    botonesDesactivados(true)
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
        botonesDesactivados(false)
    }
}

function promedioEdades() {
    botonesDesactivados(true)
    let totalEdades = 0
    for (const socio of socios) {
        totalEdades += socio?.edad
    }
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>El promedio de edades de los socios es de ${parseInt(totalEdades / socios.length)} años</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrarEstad.append(cartel)

    botonCerrarCartel(cartel, "boton-cerrar")
}

//section CUOTAS
function costoCuota() {
    if (usuario) {
        botonesDesactivados(true)
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
        botonCerrarCartel(cartel, "boton-cancelar")
        let botonGuardarCostoCuota = document.getElementById("guardar-costo-cuota")
        botonGuardarCostoCuota.onclick = () => {
            valorCuota = parseInt(inputCostoCuota.value)
            confirmarCambioCostoCuota()
            cartel.remove()
            botonesDesactivados(false)
            actualizarValorCuotaStorage()
        }
    } else {
        mensajeError('Identifíquese antes de actualizar el costo actual de la cuota')
    }
}

function cargarListaDeudores() {
    sociosDeudores.splice(0, sociosDeudores.length)
    for (const socio of socios) {
        socio?.cuotaPaga === false && sociosDeudores.push(socio)
    }
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
    botonesDesactivados(true)
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <h3>Lista de deudores</h3>
        <div id="mostrar-deudores"></div>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrarCuotas.append(cartel)
    botonCerrarCartel(cartel, "boton-cerrar")
    cargarListaDeudores()
    mostrarListaDeudores()
}
calcularRecaudacion = () => {
    let totalRecaud = 0
    for (const socio of socios) {
        socio.cuotaPaga === true && (totalRecaud += valorCuota)
    }
    return totalRecaud
}

function totalRecaudaciones() {
    botonesDesactivados(true)
    let cartel = document.createElement("div")
    cartel.innerHTML = `
    <div class="border border-success w-50 p-3 mx-auto">
        <p>El total recaudado en concepto de cuotas de este mes es de $${calcularRecaudacion()}</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    </div>
    `
    contenedorMostrarCuotas.append(cartel)
    botonCerrarCartel(cartel, "boton-cerrar")
}

//STORAGE
function eliminarStorage() {
    localStorage.clear()
    usuario = ""
    mostrarFormularioIdentificacion()
    contenedorSocios.innerHTML = ""
    location.reload()
}

async function consultarSociosServer() {
    try {
        const response = await fetch("https://63472ff9db76843976a7ebb3.mockapi.io/socios");
        const data = await response.json();
        socios = [...data];
    } catch (error) {
        console.log(error);
    }
}

async function registrarSocioServer(socio) {
    try {
        const response = await fetch("https://63472ff9db76843976a7ebb3.mockapi.io/socios",
            {
                method: "POST",
                body: JSON.stringify(socio),
            }
        );

        socios.push(socio);
        formulario.reset();
        mostrarMensajeConfirmacion("El socio fue registrado exitosamente")
    } catch (error) {
        console.log(error);
    }
}

async function eliminarSociosServer(socioId) {
    try {
        let indiceBorrar = socios.findIndex((socio) => Number(socio?.nroSocio) === Number(socioId));
        if (indiceBorrar !== -1) {
            const response = await fetch(`https://63472ff9db76843976a7ebb3.mockapi.io/socios/${indiceBorrar}`, 
                {
                    method: "DELETE"
                }
            );
            socios.splice(indiceBorrar, 1)
            mostrarMensajeConfirmacion("El producto fue eliminado exitosamente");
        } 
    } catch (error) {
        console.log(error);
    }
}

async function cambiarDatosSociosServer(socio, indice) {
    try {
        const response = await fetch("https://63472ff9db76843976a7ebb3.mockapi.io/socios",
            {
                method: "POST",
                body: JSON.stringify(socio),
            }
        );
        socios.push(socio);
        formularioCambio.reset()
        botonCambiarDatosSocio.disabled = false
        contenedorFormIngresoCambio.hidden = true
        mostrarSocioSA(socio, 'Nuevos datos')
    } catch (error) {
        console.log(error);
    }
}

function actualizarUsuarioStorage() {
    localStorage.setItem("usuario", usuario);
}

function obtenerUsuarioStorage() {
    let usuarioAlmacenado = localStorage.getItem("usuario");
    if (usuarioAlmacenado) {
        usuario = usuarioAlmacenado;
        mostrarTextoUsuario();
    }
}

function actualizarValorCuotaStorage() {
    localStorage.setItem("valorCuota", valorCuota);
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
    consultarSociosServer()
    cargarListaDeudores()
    obtenerUsuarioStorage()
    obtenerValorCuotaStorage()
}

main()