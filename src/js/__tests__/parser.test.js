import json from '../parser.js';

test('the data is parser', () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const str = String.fromCharCode.apply(null, new Uint16Array(data));
  return json(data).then((response) => {
    expect(response).toEqual(str);
  });
});
