import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'



class Pokedex extends Component {
    render() {
        let pokemons = this.props.pokemons;
        return (
            <div className="pokedex-container " className={(this.props.isWinner) ? "Green" : "Red"}>
                <h1 className="pokedex-title">{(this.props.isWinner) ? "You Won" : "You Lost"}</h1>
                <p className="pokedex-content">
                    {pokemons.map(
                        p => <Pokecard info={p} />
                    )}
                </p>
            </div>
        );
    }
};

export default Pokedex;