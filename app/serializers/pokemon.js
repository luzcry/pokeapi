import RESTserializer from '@ember-data/serializer/json-api';

export default class PokemonSerializer extends RESTserializer {
  normalizeResponse(store, model, payload, id, requestType) {
    const payloadId = Date.now();
    payload = {
      pokemon: {
        id: payloadId,
        results: payload.results,
        count: payload.count,
      },
    };
    return super.normalizeResponse(store, model, payload, id, requestType);
  }
}
