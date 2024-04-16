// Para compilar: tsc main.ts
// Para executar: node main.js
// Para que haga válido el config.json: tsc -p tsconfig.json
    // Siempre usar el comando tsc -p tsconfig.json para compilar

import {serie} from './serie.js';
import {data} from './data.js';

// Aquí se crea una lista de series
const list: serie[] = [];
let a = new data(data.series);
a.list_series.forEach((serie) => {
    list.push(serie);
});

let SerieTable: HTMLElement = document.getElementById('SeriesTable')!;

// Aquí itera sobre los datos de la lista
for (let i: number = 0; i < list.length; i++)
{
    mostrarSeries(list[i]);
}
mostrarPromedio();

// Así se crea con un objeto
function mostrarSeries(serie1: serie) 
{
    let tbodySeries = document.createElement('tbody');
    //Necesito que el nombre de la serie sea un link a la imagen de la serie
    tbodySeries.innerHTML = `
    <tr><td> ${serie1.rank}</td> <td> <a href="${serie1.image}">${serie1.name}</a> </td> <td> ${serie1.channel}</td> <td> ${serie1.seasons}</td></tr>
    `
    SerieTable.appendChild(tbodySeries);
}

function mostrarPromedio()
{
    let promedio: number = 0;
    let total: number = 0;
    for (let i: number = 0; i < list.length; i++)
    {
        total += list[i].seasons;
    }
    promedio = total / list.length;
    let tbodyPromedio = document.createElement('tbody');
    tbodyPromedio.innerHTML = `
    <tr><td colspan="4" class="promedio"> Promedio de temporadas: ${promedio}</td></tr>
    `
    SerieTable.appendChild(tbodyPromedio);
}


