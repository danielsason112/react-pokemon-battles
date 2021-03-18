import { Component } from "react";
import './Battle.css';
import BattleIntro from "./BattleIntro";
import BattleScene from "./BattleScene";

class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isReady: true
        });
    }

    render() {
        const { isReady } = this.state;
        return isReady ?
            <BattleScene {...this.props} /> :
            <BattleIntro {...this.props} clickHandler={this.handleClick} />
    }
}

export default Battle;