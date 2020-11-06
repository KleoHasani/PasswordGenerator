"use strict";

class DivideByZeroError extends Error {
  constructor(message = "Cannot divide or mod by 0 (zero).") {
    super(message);
    this.name = "DivideByZeroError";
    this.stack = Error.captureStackTrace(this, DivideByZeroError);
  }
}

// Linear Congruential Generator
class LCG {
  m_a = 48271;
  m_c = 0;
  m_m = 2147483647;
  m_seed;

  /**
   * @param {Number} seed
   */
  constructor(seed = new Date().getTime()) {
    this.m_seed = seed;
  }

  /**
   * @param {Number} a
   */
  set setA(a) {
    this.m_a = a;
  }

  /**
   * @param {Number} c
   */
  set setC(c) {
    this.m_c = c;
  }

  /**
   * @param {Number} m
   */
  set setM(m) {
    this.m_m = m;
  }

  /**
   * @param {Number} seed
   */
  set setSeed(seed) {
    this.m_seed = seed;
  }

  nextSeed() {
    if (this.m_m < 1) throw new DivideByZeroError();
    return (this.m_a * this.m_seed + this.m_c) % this.m_m;
  }

  get next() {
    this.m_seed = this.nextSeed();
    return this.m_seed;
  }

  get nextF() {
    this.m_seed = this.nextSeed();
    return this.m_seed / this.m_m;
  }
}

module.exports = { LCG, DivideByZeroError };
