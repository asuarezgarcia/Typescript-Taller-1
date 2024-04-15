// Para compilar: tsc main.ts
// Para executar: node main.js
// Para que haga válido el config.json: tsc -p tsconfig.json
// Siempre usar el comando tsc -p tsconfig.json para compilar
import { data } from './data.js';
//export const serie1: serie = new serie(1, 'Breaking Bad', 'AMC', 5, 'A high school chemistry teacher turned meth producer', 'https://www.imdb.com/title/tt0903747/');
var list = [];
var a = new data(data.series);
a.list_series.forEach(function (serie) {
    list.push(serie);
});
console.log(list);
// Así se crea directo
//list.push(new serie(1, 'Breaking Bad', 'AMC', 5, 'A high school chemistry teacher turned meth producer', 'https://www.imdb.com/title/tt0903747/', 'https://i.imgur.com/GGje0vc.jpg'));
var SerieTable = document.getElementById('SeriesTable');
// Aquí debería iterarse sobre los datos de la lista, pero dicha lista aún no se ha cargado
for (var i = 0; i < list.length; i++) {
    mostrarSeries(list[i]);
}
// Así se crea con un objeto
function mostrarSeries(serie1) {
    var tbodySeries = document.createElement('tbody');
    //Necesito que el nombre de la serie sea un link a la imagen de la serie
    tbodySeries.innerHTML = "\n    <tr><td> ".concat(serie1.rank, "</td> <td> <a href=\"").concat(serie1.image, "\">").concat(serie1.name, "</a> </td> <td> ").concat(serie1.channel, "</td> <td> ").concat(serie1.seasons, "</td></tr>\n    ");
    SerieTable.appendChild(tbodySeries);
}
