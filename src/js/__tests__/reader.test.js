import read from '../reader.js';

test('the data is buffer', () => {
  const data1 = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const buffer = new ArrayBuffer(data1.length * 2);
  return read().then((data) => {
    expect(data).toEqual(buffer);
  });
});
