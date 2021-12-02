import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => {
      json(response).then((objectString) => {
        const saving = new GameSaving(JSON.parse(objectString));
        return saving;
      });
    });
  }
}
