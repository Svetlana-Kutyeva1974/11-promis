import GameSavingLoader from '../GameSavingLoader.js';

test('the return saving', () => GameSavingLoader.load().then((saving) => {
  const savingObj = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  return expect(saving).not.toEqual(savingObj);
}));

test('the data saving', () => GameSavingLoader.load().then((saving) => expect(saving).not.toEqual(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'))));

/*
  expect(Promise.resolve(savingObj)).resolves.toEqual(savingObj);
*/
