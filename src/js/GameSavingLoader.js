import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    const value = data.then((response) => {
      console.log('возвращается', response);
      return json(response);
    });
    return value;
  }
}
