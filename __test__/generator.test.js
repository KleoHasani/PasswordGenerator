const {
  generateRandomNumbers,
  generateNumber,
  generateSymbol,
  generateUppercase,
  generateLowercase,
} = require("../src/generator");
const { LSG } = require("../src/PRNGs");

const size = 10000;
const lsg = new LSG();

describe("GENERATOR -number", () => {
  it("Should make array with 10000 numbers from 0 to 9", () => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(generateNumber(lsg.nextF));
    }
    expect(typeof arr).toBe("object");
    expect(arr.length).toEqual(size);
    arr.forEach((n) => {
      expect(typeof n).toBe("number");
      expect(n).not.toBeNaN();
      expect(n).toBeLessThanOrEqual(9);
      expect(n).toBeGreaterThanOrEqual(0);
    });
  });
});

describe("GENERATOR -symbol", () => {
  it("Should make array with 10000 symbols from ASCII values 33 to 38", () => {
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(generateSymbol(lsg.nextF));
    }
    expect(typeof arr).toBe("object");
    expect(arr.length).toEqual(size);
    arr.forEach((n) => {
      expect(typeof n).toBe("string");
      expect(n.charCodeAt(0)).not.toBeNaN();
      expect(n.charCodeAt(0)).toBeLessThanOrEqual(38);
      expect(n.charCodeAt(0)).toBeGreaterThanOrEqual(33);
    });
  });
});

describe("GENERATOR -uppercase", () => {
  it("Should make array with 10000 uppercase from ASCII value 65 to 90", () => {
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(generateUppercase(lsg.nextF));
    }
    expect(typeof arr).toBe("object");
    expect(arr.length).toEqual(size);
    arr.forEach((n) => {
      expect(typeof n).toBe("string");
      expect(n.charCodeAt(0)).not.toBeNaN();
      expect(n.charCodeAt(0)).toBeLessThanOrEqual(90);
      expect(n.charCodeAt(0)).toBeGreaterThanOrEqual(65);
    });
  });
});

describe("GENERATOR -lowercase", () => {
  it("Should make array with 10000 lowercase from ASCII value 97 to 122", () => {
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(generateLowercase(lsg.nextF));
    }
    expect(typeof arr).toBe("object");
    expect(arr.length).toEqual(size);
    arr.forEach((n) => {
      expect(typeof n).toBe("string");
      expect(n.charCodeAt(0)).not.toBeNaN();
      expect(n.charCodeAt(0)).toBeLessThanOrEqual(122);
      expect(n.charCodeAt(0)).toBeGreaterThanOrEqual(97);
    });
  });
});
