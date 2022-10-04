function confirmarEliminacion(elementoEncontrado){
    Swal.fire({
        icon: "question",
        html: `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nº de socio: <b>${elementoEncontrado.nroSocio}</b></p>
                <p class="card-text">Nombre: <b>${elementoEncontrado.nombre}</b></p>
                <p class="card-text">Apellido: <b>${elementoEncontrado.apellido}</b></p>
                <p class="card-text">Edad: <b>${elementoEncontrado.edad}</b></p>
                <p class="card-text">Género: <b>${elementoEncontrado.genero}</b></p>
                <p class="card-text">¿Cuota paga?: <b>${elementoEncontrado.cuotaPaga}</b></p>
            </div>
        </div>`,
        title: 'Confirmar eliminación del socio',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if(result.isConfirmed) {
            eliminarSocio(elementoEncontrado.nroSocio)
        }
    }

    )
}
function mensajeError(mensaje){
    Swal.fire({
        icon: "error",
        title: mensaje,
    })
}
function mostrarSocioSA(elemento, mensaje){
    Swal.fire({
        title: mensaje,
        html: `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nº de socio: <b>${elemento.nroSocio}</b></p>
                <p class="card-text">Nombre: <b>${elemento.nombre}</b></p>
                <p class="card-text">Apellido: <b>${elemento.apellido}</b></p>
                <p class="card-text">Edad: <b>${elemento.edad}</b></p>
                <p class="card-text">Género: <b>${elemento.genero}</b></p>
                <p class="card-text">¿Cuota paga?: <b>${elemento.cuotaPaga}</b></p>
            </div>
        </div>`,
    })
}
function confirmarCambioCostoCuota() {
    Swal.fire({
        icon: "success",
        html: `<p>El nuevo valor de la cuota es $${valorCuota}</p>`,
    })
}