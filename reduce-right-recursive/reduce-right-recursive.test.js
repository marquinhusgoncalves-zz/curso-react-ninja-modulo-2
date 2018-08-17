import {expect} from 'chai';
import reduceRightRecursive from './reduce-right-recursive';

it('reduceRightRecursive(["nhus", "qui", "Mar"], (acc, item) => acc + item, "") should return Marquinhus', () => {
  const before = reduceRightRecursive(
    ['nhus', 'qui', 'Mar'],
    (acc, item) => acc + item,
    ''
  );
  const after = 'Marquinhus';
  expect(before).to.be.equal(after);
});
