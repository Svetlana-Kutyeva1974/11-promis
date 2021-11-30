import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => {
      console.log(response);
      return json(response);
    });
  }
}
