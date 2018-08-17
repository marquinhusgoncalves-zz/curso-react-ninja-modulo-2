import {expect} from 'chai';
import reduceRight from './reduceRight';

it('reduceRight(["nhus", "qui", "Mar"], (acc, item) => acc + item, "") should return Marquinhus', () => {
  const before = reduceRight(
    ['nhus', 'qui', 'Mar'],
    (acc, item) => acc + item,
    ''
  );
  const after = 'Marquinhus';
  expect(before).to.be.equal(after);
});
