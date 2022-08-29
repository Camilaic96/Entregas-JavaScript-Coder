/*
Se tienen los siguientes datos de los N socios de un club:
Número de socio
Edad
Sexo (F ó M)
Importe de la cuota

Se quiere saber:
a) Cantidad de mujeres y cantidad de hombres
b) Promedio de edad de todos socios
c) Total recaudado por el club en concepto de cuotas
*/
let cantSocIngresados = 0
let totalEdades = 0
let genero
let cantMujeres = 0
let cantHombres = 0
let numSocio = parseInt(prompt("Ingrese el número de socio (0 para salir: )"))
const valorCuota = 1000

while (numSocio != 0){
    cantSocIngresados = cantSocIngresados + 1
    do{
        genero = prompt("Ingrese el genero del socio " + numSocio)
        genero = genero.toUpperCase()
    }while(genero!=='M' && genero!=='F')
    if(genero == 'F'){
        cantMujeres = cantMujeres + 1
    } else if (genero == 'M'){
        cantHombres = cantHombres + 1
    }
    totalEdades = totalEdades + parseInt(prompt("Ingrese la edad del socio " + numSocio))
    numSocio = parseInt(prompt("Ingrese el número de socio (0 para salir: )"))
}
if (cantSocIngresados == 0){
    alert("No se ingresaron socios")
} else {
    alert("De los " + cantSocIngresados + " socios ingresados, hay " + cantMujeres + " mujeres y " + cantHombres + " hombres. \nEl promedio de edades es de " + totalEdades / cantSocIngresados + " años.\nEn total se recaudaron $" + valorCuota * cantSocIngresados + " en concepto de cuotas.")
}