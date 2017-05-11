import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemid) => {
  let theItem;
  state.pokemonDetail.items.forEach( item => {
    if (item.id == itemid) {
      theItem = item;
    }
  });
  return theItem;
};
