import React, { Component } from 'react';
import Pokedex from './Pokedex'
import './App.css'

let pokemons = [
    { id: 4, name: 'Charmander', type: 'fire', base_exp: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_exp: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_exp: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_exp: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_exp: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_exp: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_exp: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_exp: 65 }
], p1 = [], p2 = [], pexp1 = 0, pexp2 = 0;

for (let i = 0; i < pokemons.length; i++) {
    let x = Math.floor(Math.random() * pokemons.length);
    p1.push(pokemons[x]);
    pokemons.splice(x, 1);
    x = Math.floor(Math.random() * pokemons.length);
    p2.push(pokemons[x]);
    pokemons.splice(x, 1);
}

p1.push(pokemons[0]);
p2.push(pokemons[1]);

p1.map(p => pexp1 += p.base_exp);
p2.map(p => pexp2 += p.base_exp);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Pokedex pokemons={p1} isWinner={(pexp1 > pexp2) ? true : false} />
                <Pokedex pokemons={p2} isWinner={(pexp1 < pexp2) ? true : false} />
            </div>
        );
    }
};

export default App;