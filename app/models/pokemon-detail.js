import Model, { attr } from '@ember-data/model';

export default class PokemonDetailModel extends Model {
  @attr('string') name;
  @attr('string') height;
  @attr('string') weight;
  @attr('string') sprites;
}
