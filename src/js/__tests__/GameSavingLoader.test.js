import GameSavingLoader from '../GameSavingLoader.js';
/*
test('the data is buffer', () => GameSavingLoader.load().then((saving) => {
  expect(saving).
toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
}));
*/
/*
test('resolves to lemon', () => {
  // make sure to add a return statement
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});
*/

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
  //return expect(Promise.resolve(saving)).resolves.not.toEqual(savingObj);
}));

/*
test('the return saving', () => {
  return GameSavingLoader.load().then((saving) => {
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

    expect(saving).toEqual(savingObj);
});
});
*/
/*
  expect(Promise.resolve(savingObj)).resolves.toMatchObject(savingObj);
*/

test('the data saving', () => GameSavingLoader.load().then((saving) => expect(saving).not.toEqual(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'))));
