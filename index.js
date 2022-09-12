/*
Se tienen los siguientes datos de los N socios de un club:
Número de socio
Nombre y apellido
Edad
Sexo (F, M ó NB)
Importe de la cuota

Se quiere saber (mostrar opciones en menú):
a) Cantidad de mujeres y cantidad de hombres
b) Promedio de edad de todos socios
c) Total recaudado por el club en concepto de cuotas
*/
let opc
let totalEdades = 0
let cantMujeres = 0
let cantHombres = 0
let cantNoBinarios = 0
const valorCuota = 1000
let socios = []
let nroSocio

const listadoMenu = () => parseInt(prompt("Menú:\n1- Ingresar socios\n2- Cantidad de mujeres\n3- Cantidad de hombre\n3-Cantidad de personas no binarioas\n5- Promedio de edades\n6- Total recaudado en cuotas\n7- Salir del programa"))
let cantMuj = () => alert("Hay " + cantMujeres + " mujeres.")
let cantHom = () => alert("Hay " + cantHombres + " hombres.")
let cantNB = () => alert("Hay " + cantNB + " personas no binarias.")
let promEdades = () => alert("El promedio de edades es de " + parseInt(totalEdades / socios.length) + " años.")
let recaudacionCuotas = () => alert("En total se recaudaron $" + valorCuota * socios.length + " en concepto de cuotas.")

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

function agregarSocio(nroSocio) {
    const ingValidGenero = function() {
        let genero
        do{
            genero = prompt("Ingrese el genero del socio (F, M ó NB)" + nroSocio)
            genero = genero.toUpperCase()
        }while(genero!=='M' && genero!=='F' && genero!=='NB')
        return genero
    }
    const ingValidCuota = function() {
        let cuota
        do{
            cuota = prompt("¿Pagó la última cuota? (V ó F)");
            cuota = cuota.toUpperCase()
        }while(cuota!=='V' && cuota!=='F')
        return cuota
    }

    let nombre = prompt("Ingrese el nombre");
    let apellido = prompt("Ingrese el apellido");
    let edad = parseInt(prompt("Ingrese la edad"));
    totalEdades += edad
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
    return socios;
}

function tareasMenu(op) {
    switch (op) {
        case 1:
            const ingNumSocio = () => parseInt(prompt("Ingrese el número de socio (0 para salir: )"))

            numSocio = ingNumSocio()
            while (numSocio != 0) {
                socios = agregarSocio();
                numSocio = ingNumSocio()
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
            alert("Fin del programa")
            break
    }
}

function main() {
    do {
        do {
            opc = listadoMenu()
        } while (opc < 1 || opc > 7)
        tareasMenu(opc)
    } while (opc !== 7)
}

main();