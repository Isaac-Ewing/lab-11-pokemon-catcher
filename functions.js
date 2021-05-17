import pokeData from './pokemon.js';

const POKEDEX = 'POKEDEX';

export function randomPokemon() {
    const p1 = Math.floor(Math.random() * 14);
    const p2 = Math.floor(Math.random() * 14);
    const p3 = Math.floor(Math.random() * 14);
    if (p1 === p2 || p1 === p3 || p2 === p3)
        return (randomPokemon);
    else
        return ([p1, p2, p3]);
}

export function getImage(Id) {
    for (let i of pokeData) {
        if (i.id === Id)
            return (i.url_image);
    }
}

export function findById(Id) {
    for (let i of pokeData) {
        if (i.id === Id)
            return (i);
    }
}

export function setPokedex(newPokedex) {
    const pokedexString = JSON.stringify(newPokedex);
    localStorage.setItem(POKEDEX, pokedexString);
}

export function getPokedex() {
    const pokedexString = localStorage.getItem(POKEDEX);

    if (!pokedexString) 
        return ([]);

    const pokedex = JSON.parse(pokedexString);
    return (pokedex);
}

export function capturePokemon(Id) {
    const pokedex = getPokedex();
    
}