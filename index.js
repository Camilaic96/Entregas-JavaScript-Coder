// Variables de información
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

let formularioCambioCostoCuota

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

    formulario = document.getElementById("form-agregar-socio")
    inputNroSocio = document.getElementById("inputNroSocio")
    inputNombre = document.getElementById("inputNombreSocio")
    inputApellido = document.getElementById("inputApellidoSocio")
    inputEdad = document.getElementById("inputEdad")
    inputGenero = document.getElementById("inputGenero")
    inputCuotaPaga = document.getElementById("inputCuotaPaga")
    contenedorSocios = document.getElementById("contenedorSocios")

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
    botonBuscarDatosSocio.onclick = buscarDatosSocio
    botonAgregarSocio.onclick = agregarSocio
    botonEliminarSocio.onclick = elimSocio
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
        actualizarSociosStorage()
    } else {
        alert("El id ya existe");
    }
    let container = document.getElementById("form-agregar-socio")
    container.innerHTML = ""
}

function eliminarSocio(nroSocio) {
    let indiceBorrar = socios.findIndex((socio) => Number(socio.nroSocio) === Number(nroSocio));
    if (indiceBorrar != -1) {
        socios.splice(indiceBorrar, 1)
        actualizarSociosStorage()
        alert("Socio eliminado")
    } else {
        alert("No existe");
    }

}

function botonCerrar(elem, id, btn) {
    const botonCerrar = document.getElementById(id)
    botonCerrar.onclick = () => {
        elem.remove()
        btn.disabled = false
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
    contenedorMostrarGestionSocios.append(cartel)
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

function actualizarSociosStorage() {
    let sociosJSON = JSON.stringify(socios);
    localStorage.setItem("socios", sociosJSON);
}

function actualizarUsuarioStorage() {
    localStorage.setItem("usuario", usuario);
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

calcularRecaudacion = () => {
    let totalRecaud = 0
    for (const socio of socios) {
        if (socio.cuotaPaga === true) {
            totalRecaud += valorCuota
        }
    }
    return totalRecaud
}

//section GESTION SOCIOS inicio
//BUSCAR DATOS SOCIO
function buscarDatosSocio() {
    botonBuscarDatosSocio.disabled = true
    let nro = parseInt(prompt("Ingrese el numero de socio a buscar: "))
    botonCerrar(mostrarSocio(buscarSocio(nro)), "boton-cerrar", botonBuscarDatosSocio)
}

//AGREGAR NUEVO SOCIO
function agregarSocio() {
    if (usuario) {
        botonAgregarSocio.disabled = true
        let cartel = document.createElement("div")
        cartel.innerHTML = `
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
                    <input type="number" class="form-control" id="inputEdad" placeholder="Edad" required />
                </div>

                <div>
                    <label class="form-label">Género</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" name="genero" id="genero-m" value="option1" required>
                    <label class="form-check-label" for="exampleRadios1">Mujer</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" name="genero" id="genero-h" value="option2" required>
                    <label class="form-check-label" for="exampleRadios1">Hombre</label>
                </div>
                <div class="form-check-inline mb-3">
                    <input class="form-check-input" type="radio" name="genero" id="genero-nb" value="option3" required>
                    <label class="form-check-label" for="exampleRadios2">No binarie</label>
                </div>

                <div>
                    <label class="form-label">¿Pagó cuota?</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="cuotaPaga" value="option1" required>
                    <label class="form-check-label" for="exampleRadios1">Sí</label>
                </div>
                <div class="form-check-inline mb-3">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="cuotaNoPaga" value="option2" required>
                    <label class="form-check-label" for="exampleRadios2">No</label>
                </div>

                <div class="mb-3">
                    <button type="submit" class="btn btn-success" id="boton-registrar">Registrar</button>
                </div>
                <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
            </form>
        `
        inicializarElementos()
        inicializarEventos()
        
        contenedorMostrarGestionSocios.append(cartel)
        botonCerrar(cartel, "boton-cerrar", botonAgregarSocio)
    } else {
        alert("Identifíquese antes de registrar un nuevo socio");
    }
}

//ELIMINAR SOCIO
function elimSocio() {
    if (usuario) {
        let nro = parseInt(prompt("Ingrese el numero de socio a eliminar"))
        eliminarSocio(nro)
    } else {
        alert("Identifíquese antes de eliminar un socio");
    }
}
/*
//CAMBIAR INFO DE SOCIO
botonCambiarDatosSocio.onclick = () => {
    botonCambiarDatosSocio.disabled = true
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

    botonCerrar(cartel, "boton-cerrar", , botonCambiarDatosSocio)
}
*/
//section GESTION SOCIOS fin

//section ESTADISTICAS inicio
//CANTIDAD SOCIOS POR GENERO
function sociosPorGenero() {
    botonSociosPorGenero.disabled = true
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>Cantidad de mujeres: ${contar("F")} - Porcentaje respecto al total: ${Math.floor((contar("F") / socios.length) * 100)}%</p>
        <p>Cantidad de hombres: ${contar("M")} - Porcentaje respecto al total: ${Math.floor((contar("M") / socios.length) * 100)}%</p>
        <p>Cantidad de personas no binarias: ${contar("NB")} - Porcentaje respecto al total: ${Math.floor((contar("NB") / socios.length) * 100)}%</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrarEstad.append(cartel)
    botonCerrar(cartel, "boton-cerrar", botonSociosPorGenero)
}

//PROMEDIO EDADES
function promedioEdades() {
    botonPromedioEdades.disabled = true
    let totalEdades = 0
    for (const socio of socios) {
        totalEdades += socio.edad
    }
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <p>El promedio de edades de los socios es de ${parseInt(totalEdades / socios.length)} años</p>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrarEstad.append(cartel)

    botonCerrar(cartel, "boton-cerrar", botonPromedioEdades)
}
//section ESTADISTICAS fin

//section CUOTAS inicio
//CAMBIAR COSTO CUOTA
function costoCuota() {
    if (usuario) {
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
        botonCerrar(cartel, "boton-cancelar", botonCostoCuota)
        formularioCambioCostoCuota = document.getElementById("formulario-costo-cuota")
        let botonGuardarCostoCuota = document.getElementById("guardar-costo-cuota")
        botonGuardarCostoCuota.onclick = () => {
            valorCuota = parseInt(inputCostoCuota.value)
            console.log(valorCuota)
            cartel.innerHTML=''
            cartel.innerHTML = `
            <p>El nuevo valor de la cuota es $${valorCuota}</p>
            <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
            `
            botonCerrar(cartel, "boton-cerrar", botonCostoCuota)
            //alert("El nuevo valor de la cuota es $" + valorCuota)
        }        
    } else {
        alert("Identifíquese antes de actualizar el costo actual de la cuota");
    }
}

//LISTA DEUDORES MES EN CURSO
function listaDeudores() {
    botonListaDeudores.disabled = true
    let cartel = document.createElement("div")
    cartel.innerHTML = `
        <h3>Lista de deudores</h3>
        <div id="mostrar-deudores"></div>
        <button type="button" class="btn btn-success m-4" id="boton-cerrar">Cerrar</button>
    `
    contenedorMostrarCuotas.append(cartel)

    botonCerrar(cartel, "boton-cerrar", botonListaDeudores)

    sociosDeudores.splice(0, sociosDeudores.length)
    for (const socio of socios) {
        if (socio.cuotaPaga === false) {
            sociosDeudores.push(socio)
        }
    }
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

//TOTAL RECAUDACIONES MES EN CURSO
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
    botonCerrar(cartel, "boton-cerrar", botonTotalRecaudaciones)
}
//section CUOTAS fin

function main() {
    inicializarElementos()
    inicializarEventos()
    obtenerSociosStorage()
    obtenerUsuarioStorage()
}

main()