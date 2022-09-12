let opc
let cantMujeres = 0
let cantHombres = 0
let cantNoBinarios = 0
const valorCuota = 1000
let socios = []
let nroSocio
let sociosDeudores = []

const listadoMenu = () => parseInt(prompt("Menú:\n1- Ingresar socios\n2- Cantidad de mujeres\n3- Cantidad de hombre\n4- Cantidad de personas no binarioas\n5- Promedio de edades\n6- Total recaudado en cuotas\n7- Mostrar lista de deudores\n8- Salir del programa"))
let cantMuj = () => alert("Hay " + cantMujeres + " mujeres.")
let cantHom = () => alert("Hay " + cantHombres + " hombres.")
let cantNB = () => alert("Hay " + cantNoBinarios + " personas no binarias.")
let promEdades = () => {
    let totalEdades = socios.reduce( (acumulador, elemento) => acumulador + elemento.edad, 0)
    alert("El promedio de edades es de " + Math.floor(totalEdades / socios.length) + " años.")
}
let recaudacionCuotas = () => {
    alert("En total se recaudaron $" + valorCuota * (socios.length - sociosDeudores.length) + " en concepto de cuotas.")
}

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
    const ingValidGenero = function() {
        let genero
        do{
            genero = prompt("Ingrese el genero del socio " + nroSocio + " (F, M ó NB)")
            genero = genero.toUpperCase()
        }while(genero!=='M' && genero!=='F' && genero!=='NB')
        return genero
    }
    const ingValidCuota = function() {
        let cuota
        do{
            cuota = prompt("¿Pagó la última cuotael socio " + nroSocio + "? (V ó F)");
            cuota = cuota.toUpperCase()
        }while(cuota!=='V' && cuota!=='F')
        return cuota
    }

    let nombre = prompt("Ingrese el nombre del socio " + nroSocio);
    let apellido = prompt("Ingrese el apellido del socio " + nroSocio);
    let edad = parseInt(prompt("Ingrese la edad del socio " + nroSocio));
    let genero = ingValidGenero()
    if (genero == 'F') {
        cantMujeres += 1
    } else if (genero == 'M'){
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
    if(cuotaPaga == false){
        sociosDeudores.push(socioARegistrar)
    }
    return socios;
}

function mostrarListaDeudores() {
    sociosDeudores.forEach((elemento) => {
        for (const propiedad in elemento) {
            console.log(`${propiedad}: ${elemento[propiedad]}`);
            }
        })
}

function tareasMenu(op) {
    switch (op) {
        case 1:
            const ingNumSocio = () => parseInt(prompt("Ingrese el número de socio (0 para salir: )"))

            nroSocio = ingNumSocio()
            while (nroSocio != 0) {
                socios = agregarSocio();
                nroSocio = ingNumSocio()
            }
            break
        case 2:
            cantMuj()
            break
        case 3:
            cantHom()
            break
        case 4:
            cantNB()
            break
        case 5:
            promEdades()
            break
        case 6:
            recaudacionCuotas()
            break
        case 7:
            mostrarListaDeudores()
            break
        case 8:
            alert("Fin del programa")
            break
    }
}

function main() {
    do {
        do {
            opc = listadoMenu()
        } while (opc < 1 || opc > 8)
        tareasMenu(opc)
    } while (opc !== 8)
}

main();