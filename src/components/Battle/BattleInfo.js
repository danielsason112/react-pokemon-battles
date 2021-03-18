import { Component } from 'react';
import './BattleInfo.css';

class BattleInfo extends Component {
    static defaultProps = {
        speed: 50
    }

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            i: 0
        }
        this.typeWriter = this.typeWriter.bind(this);
    }

    typeWriter() {
        const { message, speed } = this.props;
        const { i, text } = this.state;
        if (i < message.length) {
            this.setState({
                i: i + 1,
                text: text + message.charAt(i)
            }, () => setTimeout(this.typeWriter, speed));
        }
    }

    componentDidMount() {
        this.typeWriter();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.message !== this.props.message) {
            this.setState({
                text: "",
                i: 0
            }, () => this.typeWriter());
        }
    }

    render() {
        const { text } = this.state;
        return <div className="battle-info">
            <p>{text}</p>
        </div>
    }
}

export default BattleInfo;