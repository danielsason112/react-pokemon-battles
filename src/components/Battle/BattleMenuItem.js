import { Component } from 'react';
import './BattleMenuItem.css';

class BattleMenuItem extends Component {
    render() {
        const { text, event, eventHandler } = this.props;
        return <li onClick={() => eventHandler ? eventHandler(event) : undefined}>
            <span>
                <img src={`${process.env.PUBLIC_URL}/right-arrow.svg`} alt="arrow" />
            </span>
            {text}
        </li>
    }
}

export default BattleMenuItem;