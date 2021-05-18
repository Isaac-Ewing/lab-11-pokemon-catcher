import pokeData from './pokemon.js';
import { findById } from './functions.js';

export function mungeCaptured(pokemonArray) {
    let newArray = [];
    for (let i of pokemonArray) {
        if (i.captured > 0)
            newArray.push(Number(i.captured));
    }
    return (newArray);
}

export function mungeNames(pokemonArray) {
    let newArray = [];
    for (let i of pokemonArray) {
        for (let j of pokeData) {
            if (i.id === j.id && i.captured > 0) {
                newArray.push(i.pokemon);
            }
        }
    }
    return (newArray);
}

export function mungeColors(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokeData, poke.id);
        results.push(data.color_1);
    }
    return (results);
}