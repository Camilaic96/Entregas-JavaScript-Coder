contar = (letra) => {
    dato = 0
    for (const socio of socios) {
        socio?.genero === letra && dato++
    }
    return dato
}

calcularRecaudacion = () => {
    let totalRecaud = 0
    for (const socio of socios) {
        socio.cuotaPaga === true && (totalRecaud += valorCuota)
    }
    return totalRecaud
}