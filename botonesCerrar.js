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