import { mungeNames, mungeCaptured, mungeColors } from '../data-utils.js';
import { getPokedex } from '../functions.js';

const resetButton = document.querySelector('#reset');
const pokedex = getPokedex();
const names = mungeNames(pokedex);
const capturedData = mungeCaptured(pokedex);
const colors = mungeColors(pokedex);
const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: '# of captures',
                data: capturedData,
                backgroundColor: colors,
                borderColors: colors,
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
});

resetButton.addEventListener('click', () => {
    if (myChart) {
        window.location.replace('../');
        localStorage.removeItem('POKEDEX');
    }
});