import { randomPokemon, getImage, findById, capturePokemon } from './functions.js';
import pokeData from './pokemon.js';

const button = document.querySelector('#catch');
const radio1 = document.querySelector('#pokemon1');
const radio2 = document.querySelector('#pokemon2');
const radio3 = document.querySelector('#pokemon3');
const pic1 = document.querySelector('#pokemon1img');
const pic2 = document.querySelector('#pokemon2img');
const pic3 = document.querySelector('#pokemon3img');

const wildPokemon = randomPokemon();
pic1.src = getImage(wildPokemon[1]);
pic2.src = getImage(wildPokemon[2]);
pic3.src = getImage(wildPokemon[3]);
radio1.value = findById(wildPokemon[1]).id;
radio2.value = findById(wildPokemon[2]).id;
radio3.value = findById(wildPokemon[3]).id;

button.addEventListener('click', () => {
    const selected = document.querySelector(':checked');
    capturePokemon(selected.value);
});