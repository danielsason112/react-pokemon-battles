import { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import './CardsList.css';

class CardsList extends Component {
    render() {
        return <div className='CardsList'>
            {this.props.pokemons.map(p => {
                return <Link style={{ display: "contents" }} key={p.id} to={`/battle/${p.name}`}>
                    <Card key={p.name} pokemon={p} />
                </Link>
            }
            )}
        </div>
    }
}

export default CardsList;