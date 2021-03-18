import { Component } from 'react';
import './PokemonImage.css';

class PokemonImage extends Component {
    render() {
        const { src, animation } = this.props;
        return <div className="image-wrapper">
            <img className={animation} src={src} alt="pokemon" />
        </div>
    }
}

export default PokemonImage;