"use strict";

const { generatePassword, pool } = require("./password");

(function () {
  const pw = generatePassword({
    pools: [pool.LOWERCASE, pool.UPPERCASE],
    size: 20,
  });

  console.log(pw.toString());
})();
