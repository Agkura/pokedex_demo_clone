import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";

export const receiveAllPokemon = (pokemon) => {
  return ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
  });
};

export const receivePokemon = (pokemon) => {
  return ({
    type: RECEIVE_POKEMON,
    pokemon
  });
};

export const insertPokemon = (pokemon) => {
  return ({
    type: CREATE_POKEMON,
    pokemon
  });
};

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestPokemon = (id) => (dispatch) => {
  return APIUtil.fetchPokemon(id)
  .then(pokemon => dispatch(receivePokemon(pokemon)));
};

export const createPokemon = (pokemon) => (dispatch) => (
    APIUtil.createPokemon(pokemon).then( newPokemon => {
        dispatch(insertPokemon(newPokemon));
        return newPokemon;
    })
);
