// Para compilar: tsc main.ts
// Para executar: node main.js
// Para que haga válido el config.json: tsc -p tsconfig.json
// Siempre usar el comando tsc -p tsconfig.json para compilar
import { data } from './data.js';
// Aquí se crea una lista de series
var list = [];
var a = new data(data.series);
a.list_series.forEach(function (serie) {
    list.push(serie);
});
var SerieTable = document.getElementById('SeriesTable');
// Aquí itera sobre los datos de la lista
for (var i = 0; i < list.length; i++) {
    mostrarSeries(list[i]);
}
mostrarPromedio();
// Así se crea con un objeto
function mostrarSeries(serie1) {
    var tbodySeries = document.createElement('tbody');
    //Necesito que el nombre de la serie sea un link a la imagen de la serie
    tbodySeries.innerHTML = "\n    <tr><td> ".concat(serie1.rank, "</td> <td> <a href=\"").concat(serie1.image, "\">").concat(serie1.name, "</a> </td> <td> ").concat(serie1.channel, "</td> <td> ").concat(serie1.seasons, "</td></tr>\n    ");
    SerieTable.appendChild(tbodySeries);
}
function mostrarPromedio() {
    var promedio = 0;
    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total += list[i].seasons;
    }
    promedio = total / list.length;
    var tbodyPromedio = document.createElement('tbody');
    tbodyPromedio.innerHTML = "\n    <tr><td colspan=\"4\" class=\"promedio\"> Promedio de temporadas: ".concat(promedio, "</td></tr>\n    ");
    SerieTable.appendChild(tbodyPromedio);
}
