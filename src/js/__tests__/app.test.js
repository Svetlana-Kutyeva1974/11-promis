import Daemon from '../Daemon.js';
import Magician from '../Magician.js';

test('test преобразование в массив', () => {
  /*
  expect(team.toArray()).toStrictEqual([...team.members]);
  */
  const p2 = new Daemon('hero1', 'Daemon');
  const p3 = new Magician('hero2', 'Magician');
  console.log(p3, p2);
});
