import { Component } from "react";
import './NavBar.css';
import logo from "./logo.svg";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return <header className="NavBar">
            <Link to="/">
                <div className="brand">
                    <div className="brand-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="brand-name">
                        Pokémon Battles
                </div>
                </div>
            </Link>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                        <a href="https://github.com/danielsason112/react-pokemon-battles/" target="_blank" rel="noreferrer">
                            <li>Github</li>
                        </a>
                    </ul>
                </div>
            </nav>
        </header>
    }
}

export default NavBar;