function botonCerrarCartel(elem, id) {
    const botonCerrar = document.getElementById(id)
    botonCerrar.onclick = () => {
        elem.remove()
        botonesDesactivados(false)
    }
}

function cerrar(id, contenedor) {
    const botonCerrar = document.getElementById(id)
    botonCerrar.onclick = () => {
        botonesDesactivados(false)
        contenedor.hidden = true
    }
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