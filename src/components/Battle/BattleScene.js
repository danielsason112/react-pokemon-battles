import { Component } from 'react';
import PlayerRow from './PlayerRow';
import PokemonImage from './PokemonImage';
import PokemonStat from './PokemonStat';
import BattleControl from './BattleControl';
import BattleInfo from './BattleInfo';
import BattleMenu from './BattleMenu';
import BattleMenuItem from './BattleMenuItem';
import './BattleScene.css';
import { Link } from 'react-router-dom';

class BattleScene extends Component {
    static defaultProps = {
        events: {
            PLAYER_ATTACK: 0,
            OPPONENT_ATTACK: 1,
            END: 2
        }
    }
    constructor(props) {
        super(props);
        const { playerPokemon, opponentPokemon } = this.props;
        this.state = {
            stat: {
                player: {
                    hp: playerPokemon.stats[0].base_stat,
                    prevHp: 0,
                    animation: undefined
                },
                opponent: {
                    hp: opponentPokemon.stats[0].base_stat,
                    prevHp: 0,
                    animation: undefined
                }
            },
            isPlayerTurn: true,
            message: '',
            winner: undefined
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    playerAttack(moveName) {
        const { events, playerPokemon, opponentPokemon } = this.props;
        let move = playerPokemon.randomMoves.get(moveName);
        let stat = Object.assign({}, this.state.stat);
        stat.player.animation = 'player-attack';
        stat.opponent.animation = 'damage';
        let damage = Math.floor(move.power * Math.random());
        stat.opponent.prevHp = stat.opponent.hp;
        stat.opponent.hp = stat.opponent.hp > damage ? stat.opponent.hp - damage : 0;
        this.setState({
            stat: stat,
            message: playerPokemon.name.toUpperCase() + ' used ' + move.name.toUpperCase() + '!',
            isPlayerTurn: false
        }, () => setTimeout(() => {
            if (stat.opponent.hp === 0)
                this.handleEvent({ type: events.END });
            else
                this.handleEvent({
                    type: events.OPPONENT_ATTACK,
                    move: [...opponentPokemon.randomMoves.values()][Math.floor(Math.random() * opponentPokemon.randomMoves.size)].name
                })
        }, 3000));
    }

    opponentAttack(moveName) {
        const { opponentPokemon, events } = this.props;

        let stat = Object.assign({}, this.state.stat);
        let damage = Math.floor(opponentPokemon.randomMoves.get(moveName).power * Math.random());

        stat.player.animation = 'damage';
        stat.player.prevHp = stat.opponent.hp;
        stat.player.hp = stat.player.hp > damage ? stat.player.hp - damage : 0;

        stat.opponent.animation = 'opponent-attack';

        this.setState({
            stat: stat,
            message: 'Foe ' + opponentPokemon.name.toUpperCase() + ' used ' + moveName.toUpperCase() + '!'
        }, () => setTimeout(() => {
            stat.player.hp === 0 ?
                this.handleEvent({ type: events.END }) :
                this.setState({
                    isPlayerTurn: true
                })
        }, 3000));
    }

    handleEvent(e) {
        const { events, playerPokemon, opponentPokemon } = this.props;
        const { player, opponent } = this.state.stat;
        switch (e.type) {
            case events.PLAYER_ATTACK:
                this.playerAttack(e.move);
                break;
            case events.OPPONENT_ATTACK:
                this.opponentAttack(e.move);
                break;
            case events.END:
                const stat = Object.assign({}, this.state.stat);
                const winner = player.hp === 0 ? opponentPokemon : playerPokemon;
                const looser = Object.assign({}, player.hp === 0 ? player : opponent);
                looser.animation = 'faint';
                player.hp === 0 ? stat.player = looser : stat.opponent = looser;
                this.setState({
                    winner: winner,
                    message: winner.name.toUpperCase() + ' won the battle!',
                    stat: stat,
                    isPlayerTurn: false
                });
                break;
            default:
                break;
        }
    }

    render() {
        const { playerPokemon, opponentPokemon, events } = this.props;
        const { stat, isPlayerTurn, message, winner } = this.state;

        return <div className="battle-scene">
            <PlayerRow>
                <PokemonStat pokemon={opponentPokemon} player={stat.opponent} isPlayer={false} />
                <PokemonImage src={opponentPokemon.sprites.front_default} animation={stat.opponent.animation} />
            </PlayerRow>
            <PlayerRow>
                <PokemonImage src={playerPokemon.sprites.back_default} animation={stat.player.animation} />
                <PokemonStat pokemon={playerPokemon} player={stat.player} isPlayer={true} />
            </PlayerRow>
            {isPlayerTurn && !winner ?
                <BattleControl>
                    <BattleInfo message={`What will ${playerPokemon.name.toUpperCase()} do?`} />
                    <BattleMenu>
                        {[...playerPokemon.randomMoves.values()]
                            .filter(move => move.power)
                            .map(move =>
                                <BattleMenuItem key={move.name} text={move.name} eventHandler={this.handleEvent} event={{ type: events.PLAYER_ATTACK, move: move.name }} />)}
                    </BattleMenu>
                </BattleControl> :
                <BattleControl>
                    <BattleInfo message={message} />
                    {winner &&
                        <BattleMenu>
                            <Link to="/" style={{ display: 'contents' }}>
                                <BattleMenuItem text="home" />
                            </Link>
                            <Link to='/about' style={{ display: 'contents' }}>
                                <BattleMenuItem text="about" />
                            </Link>
                        </BattleMenu>}
                </BattleControl>}
        </div>
    }
}

export default BattleScene;