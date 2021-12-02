import GameSavingLoader from '../GameSavingLoader.js';

test('the return saving', () => {
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
  return GameSavingLoader.load().then((saving) => {
    expect(saving).not.toEqual(savingObj);
  });
});

test('the data saving2', () => GameSavingLoader.load().then((saving) => {
  expect(saving).not.toBe(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));
}));
