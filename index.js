let cantMujeres = 0
let cantHombres = 0
let cantNoBinarios = 0
const valorCuota = 1000
let socios = []
let nroSocio
let sociosDeudores = []

class Socio {
    constructor(nroSocio, nombre, apellido, edad, genero, cuotaPaga) {
        this.nroSocio = nroSocio;
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = edad;
        this.genero = genero;
        this.cuotaPaga = cuotaPaga
    }
}

function agregarSocio() {
    const ingValidGenero = function () {
        let genero
        do {
            genero = prompt("Ingrese el genero del socio " + nroSocio + " (F, M ó NB)")
            genero = genero.toUpperCase()
        } while (genero !== 'M' && genero !== 'F' && genero !== 'NB')
        return genero
    }
    const ingValidCuota = function () {
        let cuota
        do {
            cuota = prompt("¿Pagó la última cuota el socio " + nroSocio + "? (V ó F)");
            cuota = cuota.toUpperCase()
        } while (cuota !== 'V' && cuota !== 'F')
        return cuota
    }

    let nombre = prompt("Ingrese el nombre del socio " + nroSocio);
    let apellido = prompt("Ingrese el apellido del socio " + nroSocio);
    let edad = parseInt(prompt("Ingrese la edad del socio " + nroSocio));
    let genero = ingValidGenero()
    if (genero == 'F') {
        cantMujeres += 1
    } else if (genero == 'M') {
        cantHombres += 1
    } else {
        cantNoBinarios += 1
    }
    let cuotaPaga = false
    if (ingValidCuota() == 'V') {
        cuotaPaga = true
    }

    let socioARegistrar = new Socio(
        nroSocio,
        nombre,
        apellido,
        edad,
        genero,
        cuotaPaga
    );
    socios.push(socioARegistrar);
    if (cuotaPaga == false) {
        sociosDeudores.push(socioARegistrar)
    }
    return socios;
}

function ingresarSocios() {
    const ingNumSocio = () => parseInt(prompt("Ingrese el número de socio (0 para salir: )"))

    nroSocio = ingNumSocio()
    while (nroSocio != 0) {
        socios = agregarSocio();
        nroSocio = ingNumSocio()
    }
}

function mostrarListaDeudores() {
    const contenedorDeudores = document.getElementById("contenedor-deudores")
    contenedorDeudores.innerHTML = `<h3>Lista de deudores</h3>`
    sociosDeudores.forEach((elemento) => {
        for (const propiedad in elemento) {
            console.log(`${propiedad}: ${elemento[propiedad]}`)
        }
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
        contenedorDeudores.append(column)
    })
}

function mostrarDatosSocios() {
    let datosSocios = document.getElementById("datos-socios")
    let totalEdades = socios.reduce((acumulador, elemento) => acumulador + elemento.edad, 0)
    datosSocios.innerHTML = `<h3>Datos Socios</h3><p>Hay ${cantMujeres} mujeres, ${cantHombres} hombres y ${cantNoBinarios} personas no binarias</p><p>El promedio de edades es de ${Math.floor(totalEdades / socios.length)} años</p><p>En total se recaudaron $ ${valorCuota * (socios.length - sociosDeudores.length)} en concepto de cuotas.</p>`
}

function main() {
    ingresarSocios()
    const infoSocios = document.getElementById("titulo-info-socios")
    infoSocios.innerHTML = `<h2>Información de los socios</h2>`
    mostrarDatosSocios()
    mostrarListaDeudores()
}

main();