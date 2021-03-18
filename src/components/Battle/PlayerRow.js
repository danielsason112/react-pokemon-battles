import { Component } from "react";
import "./PlayerRow.css";

class PlayerRow extends Component {
    render() {
        return <div className="player-row">
            {this.props.children}
        </div>
    }
}

export default PlayerRow;