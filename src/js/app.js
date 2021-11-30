import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => saving, (error) => error);
