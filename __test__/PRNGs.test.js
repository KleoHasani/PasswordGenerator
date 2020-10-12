const { LSG, DivideByZeroError } = require("../src/PRNGs");

describe("PRNG -lsg", () => {
  it("Should throw a DivideByZeroError on m = 0", () => {
    function DivOrModByZero() {
      const lsg = new LSG();
      lsg.setM = 0;
      lsg.next;
    }
    expect(DivOrModByZero).toThrowError(DivideByZeroError);
  });

  it("Should return a number", () => {
    const lsg = new LSG();
    const n = lsg.next;
    expect(typeof n).toBe("number");
    expect(typeof n).not.toBeNaN();
  });
});
