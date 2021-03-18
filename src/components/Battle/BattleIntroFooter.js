import { Component } from "react";
import './BattleIntroFooter.css';

class BattleIntroFooter extends Component {
    render() {
        return <div className="battle-footer">
            {this.props.isSearching ? <p>Searching for an opponent...</p> :
                <div className="battle-btn"
                    onClick={this.props.clickHandler}>Battle!</div>}
        </div>
    }
}

export default BattleIntroFooter;