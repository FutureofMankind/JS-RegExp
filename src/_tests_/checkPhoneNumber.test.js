import checkPhoneNumber from '../js/checkPhoneNumber';

test.each(
  [
    ['8 (919) 000-00-00', '+79190000000'],
    ['+7 927 000 00 00', '+79270000000'],
    ['+86 000 000 0000', '+860000000000'],
  ],
)('testing function checkPhoneNumber with number: %s', (number, result) => {
  expect(checkPhoneNumber(number)).toBe(result);
});
