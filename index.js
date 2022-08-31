/*
Se tienen los siguientes datos de los N socios de un club:
Número de socio
Edad
Sexo (F ó M)
Importe de la cuota

Se quiere saber (mostrar opciones en menú):
a) Cantidad de mujeres y cantidad de hombres
b) Promedio de edad de todos socios
c) Total recaudado por el club en concepto de cuotas
*/

let opc
let cantSocIngresados = 0
let totalEdades = 0
let cantMujeres = 0
let cantHombres = 0
const valorCuota = 1000

const listadoMenu = () => alert("Menú:\n1- Ingresar socios\n2- Cantidad de mujeres\n3- Cantidad de hombre\n4- Promedio de edades\n5- Total recaudado en cuotas\n6- Salir del programa")
let cantMuj = (cantMuj) => alert("Hay " + cantMuj + " mujeres.")
let cantHom = (cantHom) => alert("Hay " + cantHom + " hombres.")
let promEdades = (cantSoc, totalEd) => alert("El promedio de edades es de " + parseInt(totalEd / cantSoc) + " años.")
let  recaudacionCuotas = (cantSoc, valorCuota) => alert("En total se recaudaron $" + valorCuota * cantSoc + " en concepto de cuotas.")

function tareasMenu(op) {
    switch(op){
        case 1:
            let numSocio
            let genero 
            const ingNumSocio = () => parseInt(prompt("Ingrese el número de socio (0 para salir: )"))
            const ingValidGenero = function() {
                do{
                    genero = prompt("Ingrese el genero del socio " + numSocio)
                    genero = genero.toUpperCase()
                }while(genero!=='M' && genero!=='F')
                return genero
            }
            const incrementoVal = (valor, incr) => valor = valor + incr
            
            numSocio = ingNumSocio()
            while (numSocio != 0){
                cantSocIngresados = incrementoVal (cantSocIngresados, 1)
                if(ingValidGenero() == 'F'){
                    cantMujeres = incrementoVal (cantMujeres, 1)
                } else {
                    cantHombres = incrementoVal (cantHombres, 1)
                }
                totalEdades = incrementoVal (totalEdades, parseInt(prompt("Ingrese la edad del socio " + numSocio)))                    
                numSocio = ingNumSocio()
            }
            break
        case 2: 
            cantMuj(cantMujeres) 
            break
        case 3: 
            cantHom(cantHombres)
            break
        case 4: 
            promEdades(cantSocIngresados, totalEdades)
            break
        case 5: 
            recaudacionCuotas(cantSocIngresados, valorCuota)
            break
        case 6:
            alert("Fin del programa")
            break
    }
}
do{
    do {
        listadoMenu()
        opc = parseInt(prompt("Ingrese la opción deseada: "))
    } while (opc < 1 || opc > 6)
    tareasMenu(opc)
} while (opc !== 6)