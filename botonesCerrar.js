function botonCerrarCartel(elem, id, btn) {
    const botonCerrar = document.getElementById(id)
    botonCerrar.onclick = () => {
        elem.remove()
        btn.disabled = false
    }
}

function cerrar(id, boton, contenedor) {
    const botonCerrar = document.getElementById(id)
    botonCerrar.onclick = () => {
        boton.disabled = false
        contenedor.hidden = true
    }
}