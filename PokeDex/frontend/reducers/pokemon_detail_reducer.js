import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonDetailReducer = ( state = {}, action ) => {
  let newState = {};
  switch(action.type){
    case RECEIVE_POKEMON:
      return merge(newState, action.pokemon);
    default:
      return state;
  }
};

export default pokemonDetailReducer;
