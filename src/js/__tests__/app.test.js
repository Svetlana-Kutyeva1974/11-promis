import GameSavingLoader from '../GameSavingLoader.js';

test('the data is buffer', () => {
  GameSavingLoader.load().then((saving) => {
    expect(saving).not.toEqual(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));
  });
});
