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
  return $.ajaz({
    url: 'api/pokemon',
    method: 'POST',
    data: {
      pokemon: pokemon
    }
  });
};
