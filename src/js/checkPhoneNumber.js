export default function checkPhoneNumber(input) {
  const onlyNumbers = input.replace(/\D/g, '');
  if (onlyNumbers.startsWith('8') && onlyNumbers.length === 11) {
    return onlyNumbers.replace('8', '+7');
  }
  return onlyNumbers.replace('', '+');
}
