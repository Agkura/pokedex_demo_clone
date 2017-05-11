import React from 'react';
import { Route, Link } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

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
    const { id, name, attack, defense, image_url, moves } = this.props.pokemon;
    let items = this.props.pokemon.items || [];
    const allItems = items.map( (el, idx) => <li key={idx}><Link to={"/pokemon/" + id + "/item/" + el.id}>{el.name}</Link></li>);

    return (
      <div className="pokemon-col">
        <ul className="pokemon-detail">
          <li><img src={image_url}></img></li>
          <li><p>{id}</p></li>
          <li><p>{name}</p></li>
          <li><p>{attack}</p></li>
          <li><p>{defense}</p></li>
          <li><p>{moves}</p></li>
        </ul>
        <ul className="item-list">
          {allItems}
        </ul>
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </div>
    );
  }
}

export default PokemonDetail;
