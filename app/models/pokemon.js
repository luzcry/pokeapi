import Model, { attr } from '@ember-data/model';

export default class PokemonModel extends Model {
  @attr('string') count;
  @attr('string') results;
}
