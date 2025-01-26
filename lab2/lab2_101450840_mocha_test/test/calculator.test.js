const chai = require('chai');
const expect = chai.expect;

// Import the calculator module
const calculator = require('../app/calculator');

describe('Basic Calculator Tests', () => {
  
  // 1) ADD Tests
  it('add(5, 2) should correctly return 7', () => {
    const result = calculator.add(5, 2);
    expect(result).to.equal(7);
  });

  it('add(5, 2) should incorrectly expect 8', () => {
    const result = calculator.add(5, 2);
    expect(result).to.equal(8);
  });

  // 2) SUB Tests
  it('sub(5, 2) should correctly return 3', () => {
    const result = calculator.sub(5, 2);
    expect(result).to.equal(3);
  });

  it('sub(5, 2) should incorrectly expect 5', () => {
    const result = calculator.sub(5, 2);
    expect(result).to.equal(5);
  });

  // 3) MUL Tests
  it('mul(5, 2) should correctly return 10', () => {
    const result = calculator.mul(5, 2);
    expect(result).to.equal(10);
  });

  it('mul(5, 2) should incorrectly expect 12', () => {
    const result = calculator.mul(5, 2);
    expect(result).to.equal(12);
  });

  // 4) DIV Tests
  it('div(10, 2) should correctly return 5', () => {
    const result = calculator.div(10, 2);
    expect(result).to.equal(5);
  });

  it('div(10, 2) should incorrectly expect 2', () => {
    const result = calculator.div(10, 2);
    expect(result).to.equal(2);
  });
  
  // 5) Extra DIV Test: Divide by zero
  it('div(10, 0) should handle division by zero', () => {
    // Depending on your calculator's implementation,
    // you might expect an error or return Infinity/NaN.
    // Here we just assume it should throw an error:
    expect(() => calculator.div(10, 0)).to.throw(Error);
  });

});
