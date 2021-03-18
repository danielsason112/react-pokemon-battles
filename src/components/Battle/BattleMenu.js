import { Component } from 'react';
import './BattleMenu.css';

class BattleMenu extends Component {
    render() {
        return <div className="battle-menu-wrapper">
            <div className="battle-menu">
                {this.props.children}
            </div>
        </div>;

    }
}

export default BattleMenu;