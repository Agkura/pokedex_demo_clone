import { withRouter } from 'react-router-dom';
import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "attack": 0,
      "defense": 0,
      "move1": "",
      "move2": "",
      "image_url": "",
      "poke_type": "bug"
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.createPokemon(this.state)
    .then((newPokemon) => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
    });
  }

  render () {
    let types = ["fire", "electric", "normal", "ghost", "psychic",
      "water","bug","dragon", "grass", "fighting", "ice", "flying", "poison",
      "ground", "rock", "steel"];
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} placeholder="Name" onChange={this.update("name")}></input>
        <input type="text" value={this.state.image_url} placeholder="Image Url" onChange={this.update("image_url")}></input>

        <select value={this.state.poke_type} onChange={this.update("poke_type")}>
          {types.map( (type, idx) =>
            <option key={idx} value={type}>{type}</option>
          )}
        </select>

        <input type="number" value={this.state.attack} placeholder="Attack" onChange={this.update("attack")}></input>
        <input type="number" value={this.state.defense} placeholder="Defense" onChange={this.update("defense")}></input>

        <input type="text" value={this.state.move1} placeholder="Move 1" onChange={this.update("move1")}></input>
        <input type="text" value={this.state.move2} placeholder="Move 2" onChange={this.update("move2")}></input>
        <input type="submit" value="Create Pokemon" />
      </form>
    );
  }

}

export default withRouter(PokemonForm);
