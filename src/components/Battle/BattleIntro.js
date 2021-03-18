import { Component } from "react";
import Card from "../Card/Card";
import CardLoading from './CardLoading';
import BattleIntroFooter from './BattleIntroFooter';

class BattleIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            isSearching: false
        }), 4000);
    }

    render() {
        const { isSearching } = this.state;
        const { playerPokemon, opponentPokemon, clickHandler } = this.props;
        return <div className="battle-container">
            <div className="battle">
                <div className="fade-in-left">
                    <Card pokemon={playerPokemon} />
                </div>
                {isSearching ? <CardLoading /> :
                    <div className="fade-in-down">
                        <Card pokemon={opponentPokemon} />
                    </div>}
            </div>
            <BattleIntroFooter isSearching={isSearching} clickHandler={clickHandler} />
        </div>
    }
}

export default BattleIntro;