import React from 'react';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
    this.requestAllPokemon = props.requestAllPokemon;
  }

  componentDidMount(){
    this.requestAllPokemon();
  }

  render(){
    return (
      <ul className="all-poke">
        {this.props.pokemon.map( (poke,idx) => (
          <li className="poke-list" key={idx}><p>{poke.id}</p><img src={poke.image_url}></img><p>{poke.name}</p></li>
          ))}
      </ul>
    );
  }
}

export default PokemonIndex;
