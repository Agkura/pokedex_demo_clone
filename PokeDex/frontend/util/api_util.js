import merge from 'lodash/merge';

export const fetchAllPokemon = () => {
  return $.ajax({
    url: "api/pokemon"
  });
};

export const fetchPokemon = (id) => {
  return $.ajax({
    url: `api/pokemon/${id}`,
  });
};

export const createPokemon = (pokemon) => {
  let moves = {moves: [pokemon.move1, pokemon.move2]};

  delete pokemon["move1"];
  delete pokemon["move2"];

  let newPokemon = merge({}, pokemon, moves);

  debugger;
  return $.ajax({
    url: 'api/pokemon',
    method: 'POST',
    data: {
      pokemon: newPokemon
    }
  });
};
