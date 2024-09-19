import Validator from '../js/Validator';

test.each(
  [
    ['Synyster', true],
    ['SynysterGates', true],
    ['Synyster-Gates', true],
    ['Synyster_Gates', true],
    ['Synyster_616_Gates', true],
    ['Synyster_64269_Gates', false],
    ['Synyster6666Gates', false],
    ['1_Synyster-Gates', false],
    ['Synyster-Gates_1', false],
    ['Synyster$Gates', false],
    ['Synyster*Gates', false],
    ['_Synyster_Gates', false],
    ['Synyster_Gates_', false],
    ['-Synyster_Gates', false],
    ['Synyster_Gates-', false],
    ['Synyster/Gates', false],
    ['Synyster|Gates', false],
    ['Synyster.Gates', false],
    ['Synyster\nGates', false],
  ],
)('testing static method validateUsername with name: %s', (name, result) => {
  expect(Validator.validateUsername(name)).toBe(result);
});
