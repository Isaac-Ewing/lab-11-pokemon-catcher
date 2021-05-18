import pokeData from './pokemon.js';

const POKEDEX = 'POKEDEX';

export function randomPokemon() {
    const p1 = Math.ceil(Math.random() * 14);
    const p2 = Math.ceil(Math.random() * 14);
    const p3 = Math.ceil(Math.random() * 14);
    if (p1 === p2 || p1 === p3 || p2 === p3)
        return (randomPokemon());
    else
        return ([p1, p2, p3]);
}

export function getImage(Id) {
    for (let i of pokeData) {
        if (i.id === Id)
            return (i.url_image);
    }
}

export function findById(someArray, Id) {
    for (let item of someArray) {
        if (item.id === Id)
            return item;
    }
    return null; //I had my own version but when I was trying to figure out an error, I copied Dani's over and never switched it back
} 

export function getPokedex() {
    const string = localStorage.getItem(POKEDEX);

    if (!string) 
        return ([]);

    const pokedex = JSON.parse(string);
    return (pokedex);
}

export function setPokedex(newPokedex) {
    const pokedexString = JSON.stringify(newPokedex);
    localStorage.setItem(POKEDEX, pokedexString);
}

export function encounterPokemon(Id) {
    let pokedex = getPokedex();
    let pokemon = findById(pokedex, Id);

    if (!pokemon) {
        pokedex.push(findById(pokeData, Id));
    }
    setPokedex(pokedex);
    pokemon = findById(pokedex, Id);
    if (pokemon)
        pokemon.times_seen++;
    setPokedex(pokedex);
}

export function capturePokemon(Id) {
    const pokedex = getPokedex();
    const pokemon = findById(pokedex, Id);
    if (pokemon)
        pokemon.captured++;
    setPokedex(pokedex);
}