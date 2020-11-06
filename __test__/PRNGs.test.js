const { LCG, DivideByZeroError } = require("../src/PRNGs");

describe("PRNG -lcg", () => {
  it("Should throw a DivideByZeroError on m = 0", () => {
    function DivOrModByZero() {
      const lcg = new LCG();
      lcg.setM = 0;
      lcg.next;
    }
    expect(DivOrModByZero).toThrowError(DivideByZeroError);
  });

  it("Should return a number", () => {
    const lcg = new LCG();
    const n = lcg.next;
    expect(typeof n).toBe("number");
    expect(typeof n).not.toBeNaN();
  });
});
