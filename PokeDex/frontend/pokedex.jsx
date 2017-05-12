import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});


import { fetchAllPokemon, fetchPokemon } from './util/api_util';
import { requestAllPokemon, receiveAllPokemon, requestPokemon, createPokemon} from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
window.requestPokemon = requestPokemon;
window.fetchPokemon = fetchPokemon;
window.createPokemon = createPokemon;
window.newpokemon = { name: "Venusaurdddd", attack: 82, defense: 83, poke_type: "grass", moves: [ "tackle", "vine whip", "razor leaf"], image_url: "http://hackathon-in-a-box.org/img/box.png" }
