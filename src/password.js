const {
  generateNumber,
  generateSymbol,
  generateUppercase,
  generateLowercase,
} = require("./generator");
const { LCG } = require("./PRNGs");

// Pool options available
const pool = {
  NUMBER: generateNumber,
  SYMBOL: generateSymbol,
  UPPERCASE: generateUppercase,
  LOWERCASE: generateLowercase,
};

// Generate Password
function generatePassword(
  options = {
    pools: [pool.UPPERCASE, pool.LOWERCASE],
    size: 6,
    start: null,
  }
) {
  const lcg = new LCG();

  const password = [];

  let i = 0;
  if (options.start) {
    i = 1;
    password.push(options.start(lcg.nextF));
  }

  for (i; i < options.size; i++) {
    const choice = Math.round(Math.random() * (options.pools.length - 1));
    password.push(options.pools[choice](lcg.nextF));
  }
  return password;
}

module.exports = { pool, generatePassword };
