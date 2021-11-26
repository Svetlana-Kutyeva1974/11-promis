import Daemon from '../Daemon.js';
import Character from '../Character.js';

test('string length name error', () => {
  const result = new Daemon('hero', 'Daemon');
  expect(result.attack).toBe(8);
});

test('string length name error', () => {
  const result0 = new Daemon('hero', 'Daemon');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Daemon('hero', 'Daemon');
  const result2 = new Character('hero', 'Daemon');
  expect(result2).not.toMatchObject(result1);
});

test('Проверка гетера stoned', () => {
  const result1 = new Daemon('hero', 'Daemon');
  // eslint no-underscore-dangle: "off"
  expect(result1.stoned).toBe(3);
});

test('Проверка гетера число клеток', () => {
  const result1 = new Daemon('hero', 'Daemon');
  expect(result1.number).toBe(3);
});
