import { Component } from "react";
import './BattleControl.css';

class BattleControl extends Component {

    render() {
        return <div className="battle-control-wrapper">
            <div className="battle-control">
                {this.props.children}
            </div>
        </div>
    }
}

export default BattleControl;