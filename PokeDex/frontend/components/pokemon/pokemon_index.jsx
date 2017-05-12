import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';


class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
    this.requestAllPokemon = props.requestAllPokemon;
  }

  componentDidMount(){
    this.requestAllPokemon();
  }

  render(){
    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

    return (
      <main>
        <ul className="all-poke">
          {pokemonItems}
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
        <Route exact path="/" component={PokemonFormContainer}/>
      </main>
    );
  }
}

export default PokemonIndex;
