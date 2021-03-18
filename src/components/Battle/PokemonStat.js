import { Component } from 'react';
import './PokemonStat.css';

class PokemonStat extends Component {
    constructor(props) {
        super(props);
        const { player } = this.props;
        this.state = {
            width: player.prevHp / this.getMaxHp() * 100 + '%'
        }
    }

    getMaxHp() {
        return this.props.pokemon.stats[0].base_stat;
    }

    componentDidMount() {
        requestAnimationFrame(() => this.setState({ width: this.props.player.hp / this.getMaxHp() * 100 + '%' }));
    }

    componentDidUpdate() {
        if (this.state.width !== this.props.player.hp / this.getMaxHp() * 100 + '%')
            requestAnimationFrame(() => this.setState({ width: this.props.player.hp / this.getMaxHp() * 100 + '%' }));
    }

    render() {
        const { player, pokemon, isPlayer } = this.props;
        const currentHp = player.hp / this.getMaxHp() * 100;
        const bgColor = currentHp > 0.4 ? "green" : "red";

        return <div className="pokemon-stat-wrapper">
            <div className="pokemon-stat">
                <p className="pokemon-stat-name">{pokemon.name.toUpperCase()}</p>
                <div className="pokemon-stat-hp">
                    <p>hp</p>
                    <div style={{
                        width: this.state.width,
                        backgroundColor: bgColor
                    }}></div>
                </div>
                {isPlayer && <p className="pokemon-stat-hp-text">{player.hp}/{this.getMaxHp()}</p>}
            </div>
        </div>
    }
}

export default PokemonStat;