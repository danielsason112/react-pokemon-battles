import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AboutPage from './AboutPage';
import './App.css';
import Battle from './Battle/Battle';
import CardsList from './CardsList';
import Loading from './Loading';
import NavBar from './NavBar';
import PageTitle from './PageTitle';


const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class App extends Component {
  static defaultProps = {
    limit: 20,
    maxDexNumber: 151,
  }

  constructor(props) {
    super(props);
    this.state = {
      pokemons: new Map(),
      isLoading: true
    }
  }

  async getPokemon(id) {
    return P.getPokemonByName(id)
      .then(async p => {
        p.randomMoves = new Map([...await Promise.all(
          this.randomMovesGenerator(4, p.moves)
        )].map((m) => [m.name, m]));
        return p;
      });
  }

  * randomPokemonsGenerator(limit) {
    for (let i = 0; i < limit; i++) {
      yield this.getPokemon(Math.floor(Math.random() * this.props.maxDexNumber + 1));
    }
  }

  * randomMovesGenerator(limit, moves) {
    for (let i = 0; i < limit; i++) {
      i === 0 ? yield P.getMoveByName('tackle') :
        yield P.getMoveByName(moves[Math.floor(Math.random() * moves.length)].move.name);
    }
  }

  async addPokemons() {
    this.setState({
      isLoading: true
    });

    const data = await Promise.all(
      this.randomPokemonsGenerator(this.props.limit)
    );

    const pokemons = new Map(this.state.pokemons);
    data.forEach(async p => pokemons.set(p.name, p));
    this.setState({
      pokemons: pokemons,
      isLoading: false
    });
  }

  componentDidMount() {
    this.addPokemons();
  }

  render() {
    const { isLoading, pokemons } = this.state;

    return <div className="App">

      <div className="wrapper">

        <Switch>

          <Route path="/about">
            <NavBar />
            <AboutPage />
          </Route>

          <Route path="/battle/:name" render={({ match }) => {
            const name = match.params.name;
            return pokemons.has(name) ?
              <div>
                <NavBar />
                <Battle playerPokemon={pokemons.get(name)}
                  opponentPokemon={pokemons.get(
                    [...pokemons.keys()][Math.floor(Math.random() * pokemons.size + 1)]
                  )}
                />
              </div> :
              <Redirect to="/" />
          }} />

          <Route path="/">
            {!isLoading &&
              <div>
                <NavBar />
                <PageTitle text="Choose Your Pokémon:" />
                <CardsList pokemons={[...pokemons.values()]} />
              </div>}
          </Route>
        </Switch>

        {isLoading && <Loading />}
      </div>
    </div>
  }
}

export default App;
