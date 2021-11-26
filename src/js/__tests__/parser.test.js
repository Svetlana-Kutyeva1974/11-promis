import Character from '../Character.js';
import Magician from '../Magician.js';

test('string length name error', () => {
  const result2 = new Character('hero', 'Magician');
  expect(result2.name).toMatch(/hero/);
});

test('app string length name error', () => {
  const result = new Character('hero', 'Magician');
  expect(result.type).toMatch(/Magician/);
});

test('app string length name error', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const obj = new Character('heroismerror', 'Magician');
  }).toThrow(/Ошибка, имя должно содержать не менее 2 и не более 10 символов/);
});

test('app type error ', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const result3 = new Character('hero5', 'Magiciancheck');
  }).toThrow(/Ошибка, недопустимый тип элемента/);
});

test('Проверка значений stoned', () => {
  const result1 = new Magician('hero', 'Magician');
  // eslint no-underscore-dangle: "error"
  expect(result1.stoned).toBe(10);
});

test('Проверка number', () => {
  const result1 = new Magician('hero', 'Magician');
  expect(result1.number).toBe(0);
});
