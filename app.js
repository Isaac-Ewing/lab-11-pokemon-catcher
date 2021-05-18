import { randomPokemon, getImage, capturePokemon, encounterPokemon, getPokedex, findById } from './functions.js';

const button = document.querySelector('#catch');
const radio1 = document.querySelector('#pokemon1');
const radio2 = document.querySelector('#pokemon2');
const radio3 = document.querySelector('#pokemon3');
const pic1 = document.querySelector('#poke1img');
const pic2 = document.querySelector('#poke2img');
const pic3 = document.querySelector('#poke3img');
const enc1 = document.querySelector('#p1-enc');
const enc2 = document.querySelector('#p2-enc');
const enc3 = document.querySelector('#p3-enc');
const cap1 = document.querySelector('#p1-cap');
const cap2 = document.querySelector('#p2-cap');
const cap3 = document.querySelector('#p3-cap');

localStorage.removeItem('POKEDEX');
const wildPokemon = randomPokemon();
pic1.src = getImage(wildPokemon[0]);
pic2.src = getImage(wildPokemon[1]);
pic3.src = getImage(wildPokemon[2]);
radio1.value = wildPokemon[0];
radio2.value = wildPokemon[1];
radio3.value = wildPokemon[2];
encounterPokemon(wildPokemon[0]);
encounterPokemon(wildPokemon[1]);
encounterPokemon(wildPokemon[2]);
let totalCaptures = 0;

button.addEventListener('click', () => {
    totalCaptures++;
    const selected = document.querySelector(':checked');
    capturePokemon(Number(selected.value));
    const wildPokemon = randomPokemon();
    pic1.src = getImage(wildPokemon[0]);
    pic2.src = getImage(wildPokemon[1]);
    pic3.src = getImage(wildPokemon[2]);
    radio1.value = wildPokemon[0];
    radio2.value = wildPokemon[1];
    radio3.value = wildPokemon[2];
    encounterPokemon(wildPokemon[0]);
    encounterPokemon(wildPokemon[1]);
    encounterPokemon(wildPokemon[2]);
    if (totalCaptures === 10){
        window.location.replace('./results');
    }
    const pokedex = getPokedex();
    enc1.textContent = `encounters: ${findById(pokedex, wildPokemon[0]).times_seen}`;
    enc2.textContent = `encounters: ${findById(pokedex, wildPokemon[1]).times_seen}`;
    enc3.textContent = `encounters: ${findById(pokedex, wildPokemon[2]).times_seen}`;
    cap1.textContent = `captured: ${findById(pokedex, wildPokemon[0]).captured}`;
    cap2.textContent = `captured: ${findById(pokedex, wildPokemon[1]).captured}`;
    cap3.textContent = `captured: ${findById(pokedex, wildPokemon[2]).captured}`;
});