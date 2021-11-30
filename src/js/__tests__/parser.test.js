import json from '../parser.js';

test('the data is peanut butter', () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  /*
  const buffer = new ArrayBuffer(data.length * 2);
  return expect(json(buffer)).resolves.toBe(data);
  */
  return json(data).then((response) => {
    expect(response).toEqual(/{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}/);
  });
});
