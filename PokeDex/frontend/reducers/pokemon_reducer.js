import merge from 'lodash/merge';
import { RECEIVE_ALL_POKEMON, CREATE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case CREATE_POKEMON:
      newState[action.pokemon.id] = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
