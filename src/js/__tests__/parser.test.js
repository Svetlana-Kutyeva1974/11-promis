import json from '../parser.js';

test('the data is buffer', () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const buffer = new ArrayBuffer(data.length * 2);
  return json(buffer).then((data1) => {
    expect(data1).toMatch(/{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}/);
  });
});
