const { generatePassword, pool } = require("../src/password");

describe("PASSWORD -generate password", () => {
  it("Should generate 6 character long string all uppercase", () => {
    const init = {
      pools: [pool.UPPERCASE],
      size: 6,
    };
    const p = generatePassword(init);
    expect(typeof p).toBe("object");
    expect(p.length).toBe(init.size);
    p.forEach((v) => {
      expect(v.charCodeAt(0)).toBeLessThanOrEqual(90);
      expect(v.charCodeAt(0)).toBeGreaterThanOrEqual(65);
    });
  });

  it("Should generate 6 character long string all lowercase", () => {
    const init = {
      pools: [pool.LOWERCASE],
      size: 6,
    };
    const p = generatePassword(init);
    expect(typeof p).toBe("object");
    expect(p.length).toBe(init.size);
    p.forEach((v) => {
      expect(v.charCodeAt(0)).toBeLessThanOrEqual(122);
      expect(v.charCodeAt(0)).toBeGreaterThanOrEqual(97);
    });
  });

  it("Should generate 6 character long string all symbol", () => {
    const init = {
      pools: [pool.SYMBOL],
      size: 6,
    };
    const p = generatePassword(init);
    expect(typeof p).toBe("object");
    expect(p.length).toBe(init.size);
    p.forEach((v) => {
      expect(v.charCodeAt(0)).toBeLessThanOrEqual(38);
      expect(v.charCodeAt(0)).toBeGreaterThanOrEqual(33);
    });
  });

  it("Should generate 6 character long string all number", () => {
    const init = {
      pools: [pool.NUMBER],
      size: 6,
    };
    const p = generatePassword(init);
    expect(typeof p).toBe("object");
    expect(p.length).toBe(init.size);
    p.forEach((v) => {
      expect(v).toBeLessThanOrEqual(9);
      expect(v).toBeGreaterThanOrEqual(0);
    });
  });

  it("Should generate 6 character long string first character being uppercase", () => {
    const init = {
      pools: [pool.NUMBER, pool.SYMBOL, pool.UPPERCASE, pool.LOWERCASE],
      size: 6,
      start: pool.UPPERCASE,
    };
    const p = generatePassword(init);
    expect(typeof p).toBe("object");
    expect(p.length).toBe(init.size);
    expect(p[0].charCodeAt(0)).toBeLessThanOrEqual(90);
    expect(p[0].charCodeAt(0)).toBeGreaterThanOrEqual(65);
  });

  it("Should generate 6 character long string first character being lowercase", () => {
    const init = {
      pools: [pool.NUMBER, pool.SYMBOL, pool.UPPERCASE, pool.LOWERCASE],
      size: 6,
      start: pool.LOWERCASE,
    };
    const p = generatePassword(init);
    expect(typeof p).toBe("object");
    expect(p.length).toBe(init.size);
    expect(p[0].charCodeAt(0)).toBeLessThanOrEqual(122);
    expect(p[0].charCodeAt(0)).toBeGreaterThanOrEqual(97);
  });

  it("Should generate 6 character long string first character being symbol", () => {
    const init = {
      pools: [pool.NUMBER, pool.SYMBOL, pool.UPPERCASE, pool.LOWERCASE],
      size: 6,
      start: pool.SYMBOL,
    };
    const p = generatePassword(init);
    expect(typeof p).toBe("object");
    expect(p.length).toBe(init.size);
    expect(p[0].charCodeAt(0)).toBeLessThanOrEqual(38);
    expect(p[0].charCodeAt(0)).toBeGreaterThanOrEqual(33);
  });

  it("Should generate 6 character long string first character being number", () => {
    const init = {
      pools: [pool.NUMBER, pool.SYMBOL, pool.UPPERCASE, pool.LOWERCASE],
      size: 6,
      start: pool.NUMBER,
    };
    const p = generatePassword(init);
    expect(typeof p).toBe("object");
    expect(p.length).toBe(init.size);
    expect(p[0]).toBeLessThanOrEqual(9);
    expect(p[0]).toBeGreaterThanOrEqual(0);
  });
});
