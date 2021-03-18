import { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const { name, randomMoves, stats, sprites, types } = this.props.pokemon;
        return <div className='Card' style={{ backgroundColor: `var(--${types[0].type.name}-bg)` }}>
            <div className='Card-top'>
                <p className='Card-name'>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p className='Card-hp'>
                        {stats[0].base_stat} HP
                    </p>
                    <img className="Card-type-sticker" src={`${process.env.PUBLIC_URL}/${types[0].type.name}-type.svg`} alt="type sticker" />
                </div>
            </div>
            <div className="Card-img">
                <img src={sprites.other['official-artwork'].front_default} alt='pokemon card' />
            </div>
            <ul className="card-types">
                {types.map((t, i) => <li style={{ backgroundColor: `var(--${t.type.name}-type)` }} key={i}>{t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}</li>)}
            </ul>
            <ul className='Card-moves'>
                {[...randomMoves.values()].filter(move => move.power)
                    .reverse()
                    .map((move) =>
                        <li key={move.name}>
                            <div className="Card-move-top">
                                <img className="Card-type-sticker" src={`${process.env.PUBLIC_URL}/${move.type.name}-type.svg`} alt="type sticker" />
                                <p>
                                    {move.name.charAt(0).toUpperCase() + move.name.slice(1)}
                                </p>
                                <p style={{ textAlign: "end", width: "25px" }}>{move.power}</p>
                            </div>
                            <p>{move.flavor_text_entries.filter(f => f.language.name === "en")[0].flavor_text}</p>
                        </li>
                    )}
            </ul>
        </div>
    }
}

export default Card;