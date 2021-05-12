import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        let info = this.props.info;
        let src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
        if (info.id < 10)
            src += "00" + info.id;
        else if (info.id >= 10 && info.id < 100)
            src += "0" + info.id;
        else
            src += info.id;
        src += ".png";
        return (
            <div className="pokecard-container">
                <p>
                    <h4 className="pokecard-title">{info.name}</h4>
                    <img src={src} className="pokecard-img" />
                    <p className="pokedex-info"><pre>Type:  {info.type} <br />EXP:    {info.base_exp}</pre></p>
                </p>
            </div>
        );
    }
}

export default Pokecard;