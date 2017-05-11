import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, image_url, name } = this.props.pokemon;

    return (
      <li className="poke-list">
        <Link to={"/pokemon/" + id}>
          <p>{id}</p><img src={image_url}></img><p>{name}</p>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
