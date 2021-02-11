import RESTAdapter from '@ember-data/adapter/json-api';

export default class PokemonAdapter extends RESTAdapter {
  host = 'https://pokeapi.co';
  namespace = 'api/v2';
  pathForType(modelName) {
    return modelName;
  }
}
