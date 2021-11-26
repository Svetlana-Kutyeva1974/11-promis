// eslint-disable-next-line no-unused-vars
import json from './parser.js';

import read from './reader.js';

import GameSavingLoader from './GameSavingLoader.js';

// eslint-disable-next-line no-unused-vars
GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
    console.log("вернулось в итоге saving\n",`${saving} `);
  }, (error) => {
    // ...
    console.err("error");
  });
