function generateNumber(r) {
  return Math.round(r * 9);
}

function generateSymbol(r) {
  return String.fromCharCode(Math.round(r * (38 - 33) + 33));
}

function generateUppercase(r) {
  return String.fromCharCode(Math.round(r * (90 - 65) + 65));
}

function generateLowercase(r) {
  return String.fromCharCode(Math.round(r * (122 - 97) + 97));
}

module.exports = {
  generateNumber,
  generateSymbol,
  generateUppercase,
  generateLowercase,
};
