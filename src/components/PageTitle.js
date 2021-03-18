import { Component } from "react";
import './PageTitle.css';

class PageTitle extends Component {
    render() {
        return <h1 className="PageTitle">{this.props.text}</h1>
    }
}

export default PageTitle;