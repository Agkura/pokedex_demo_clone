import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    let { id, name, attack, defense, image_url, moves } = this.props.pokemon;
    return (
      <ul className="pokemon-detail">
        <li><img src={image_url}></img></li>
        <li><p>{id}</p></li>
        <li><p>{name}</p></li>
        <li><p>{attack}</p></li>
        <li><p>{defense}</p></li>
        <li><p>{moves}</p></li>
      </ul>
      // item detail container
    );
  }
}

export default PokemonDetail;
