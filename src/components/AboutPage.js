import { Component } from "react";
import PageTitle from "./PageTitle";
import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return <div className="page">
            <PageTitle text="About"></PageTitle>
            <p>
                A simple game built with React, where you choose a Pokémon card and battle a random opponent.
            </p>
            <h3>
                Who am I?
            </h3>
            <p>
                Hi, I'm Daniel, a junior full stack developer, and I was born in the 90s so I spent days wandering
                grassy terrains searching for Pokémons (on my Gameboy of course).<br />I started this project in order
                to learn React. This is my first project in React, and actualy my first time working with a front end
                framework, that is if you consider jQuery to be more of a library, like I do.
                </p>
            <h3>
                The Game
            </h3>
            <p>
                First, the player chooses a Pokémon card. Then, a random Pokémon is choosen and the battle will begin
                as soon as the player hits the battle button. All of the moves (attacks) available for a Pokémon are
                choosen randomly.
            </p>
            <img src={process.env.PUBLIC_URL + "/choose-a-card.png"}
                alt="choose a card" />
            <p>
                On the player's turn, the available moves are showen in the battle menu, and when clicking
                on one of them, the player's Pokémon will perform the attack. Next, the opponent Pokémon will attack with one
                randomly choosen move. The hit damage is in the range of 0 to the move's power (showen in the Pokémon card).
                Those two steps are repeated until one of the Pokémon hp reaches 0, and the winner is anounced.
            </p>
            <img src={process.env.PUBLIC_URL + "/battle.png"}
                alt="battle" />
            <h3>
                Under The Hood
            </h3>
            <ul>
                <li><strong>React</strong></li>
                <li><strong>React Router</strong> - A collection of navigational components for routing.</li>
                <li><strong>PokeAPI</strong> - RESTful API serving all of Pokémon data.</li>
                <li><strong>pokeapi-js-wrapper</strong> - An asynchronous PokeAPI wrapper with built-in cache for browsers.</li>
            </ul>
            <h3>
                Things I Have Learned The Hard Way
                </h3>
            <ul>
                <li>
                    <strong>Props, props, and more props</strong> - Use props whenever you can, only use state when the data is
                    changing (user interaction, data fetching, etc.)
                    </li>
                <li>
                    <strong>Lift it higher</strong> - Whenever two or more components are sharing the same changing data,
                    The state needs to be pushed up to their closest shared ancestor.
                    </li>
            </ul>
            <h3>
                More To Do
                </h3>
            <ul>
                <li>
                    Use Redux for managing the app's state.
                </li>
                <li>
                    Better battle flow resemblance to the original game (support other type of moves like healing,
                    type weaknesses and strengths, better hits damage calculation, etc).
                </li>
                <li>
                    Infinite scroll.
                </li>
                <li>
                    Dark mode.
                </li>
                <li>
                    Pokémon search.
                </li>
            </ul>
            <p>
                You can view the full source code at <a href="https://github.com/danielsason112/react-pokemon-battles/">github</a>.
            </p>
        </div>
    }
}

export default AboutPage;