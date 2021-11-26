import Magician from '../Magician.js';
import Character from '../Character.js';

test('string length name error', () => {
  const result = new Magician('hero', 'Magician');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Magician('hero', 'Magician');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Magician('hero2', 'Magician');
  const result2 = new Character('hero2', 'Magician');
  expect(result2).not.toMatchObject(result1);
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
