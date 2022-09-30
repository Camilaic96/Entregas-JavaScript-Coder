const graficaSociosPorGenero = document.getElementById("graf-socios-por-genero")

function mostrarGrafica(value, cantMuj, cantHom, cantNB) {
    graficaSociosPorGenero.hidden = value
    let xValues = ["Mujeres", "Hombres", "No binarixs"];
    let yValues = [cantMuj, cantHom, cantNB];
    let barColors = ["red", "green", "yellow"];
    new Chart("graf-socios-por-genero", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Cantidad de socios por género"
            }
        }
    });
}
