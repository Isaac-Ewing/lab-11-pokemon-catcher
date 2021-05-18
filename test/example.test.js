// IMPORT MODULES under test here:
import { randomPokemon, getPokedex, setPokedex, encounterPokemon, capturePokemon } from '../functions.js';
const POKEDEX = 'POKEDEX';
const test = QUnit.test;

test('randomPokemon', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    const pokemon = randomPokemon();
    // Call the function you're testing and set the result to a const
    let actual = true;
    if (pokemon[0] === pokemon[1] || pokemon[0] === pokemon[2] || pokemon[1] === pokemon[2])
        actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('getPokedex', (expect) => {
    const dex = [
        {
            'id':1,
            'pokemon':'yes'
        }
    ];
    localStorage.setItem(POKEDEX, JSON.stringify(dex));
    const expected = dex;
    const actual = getPokedex();
    expect.deepEqual(actual, expected);  //Gonna be real, this was a huge ?????? for me but I guess that's all it's supposed to do
});

test('setPokedex', (expect) => {
    const dex = [
        {
            'id':1,
            'pokemon':'yes'
        }
    ];
    setPokedex(dex);
    const expected = dex;
    const actual = JSON.parse(localStorage.getItem(POKEDEX));
    expect.deepEqual(actual, expected);
});

test('encounterPokemon', (expect) => {
    const dex = [
        {
            'id':1,
            'times_seen':0
        }
    ];
    setPokedex(dex);
    encounterPokemon(1);
    const expected = 1;
    const actual = JSON.parse(localStorage.getItem(POKEDEX))[0].times_seen;
    expect.deepEqual(actual, expected);
});

test('capturePokemon', (expect) => {
    const dex = [
        {
            'id':1,
            'captured':0
        }
    ];
    setPokedex(dex);
    capturePokemon(1);
    const expected = 1;
    const actual = JSON.parse(localStorage.getItem(POKEDEX))[0].captured;
    expect.deepEqual(actual, expected);
});