// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber tests
test('Valid phone number should return true', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
  
test('Invalid phone number should return false', () => {
  expect(functions.isPhoneNumber('123')).toBe(false);
});
test('Valid phone number should return true', () => {
  expect(functions.isPhoneNumber('113-456-7892')).toBe(true);
});
    
test('Invalid phone number should return false', () => {
  expect(functions.isPhoneNumber('113-4@!-7892')).toBe(false);
});
// isEmail tests
test('Valid email should return true', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
});
  
test('Invalid email should return false', () => {
  expect(functions.isEmail('test')).toBe(false);
});

test('Valid email should return true', () => {
    expect(functions.isEmail('test@efsdfsddle.com')).toBe(true);
});

test('Invalid email should return false', () => {
    expect(functions.isEmail('@@comz.')).toBe(false);
});
  
// isStrongPassword tests
test('Valid strong password should return true', () => {
  expect(functions.isStrongPassword('Abcd1234')).toBe(true);
});
test('Valid strong password should return true', () => {
    expect(functions.isStrongPassword('Abcd')).toBe(true);
});
test('Invalid strong password should return false', () => {
  expect(functions.isStrongPassword('@bcd1234')).toBe(false);
});
test('Invalid strong password should return false', () => {
    expect(functions.isStrongPassword('1234ewq')).toBe(false);
});
  
// isDate tests
test('Valid date should return true', () => {
  expect(functions.isDate('05/27/2023')).toBe(true);
});
  
test('Invalid date should return false', () => {
  expect(functions.isDate('27/05/2023')).toBe(true);
});
test('Invalid date should return false', () => {
    expect(functions.isDate('2732/05/2023')).toBe(false);
});
test('Invalid date should return false', () => {
    expect(functions.isDate('273/0531/23')).toBe(false);
});
  
// isHexColor tests
test('Valid hex color should return true', () => {
  expect(functions.isHexColor('#aabbcc')).toBe(true);
});
  
test('Invalid hex color should return false', () => {
  expect(functions.isHexColor('#ffffff')).toBe(true);
});
test('Valid hex color should return true', () => {
    expect(functions.isHexColor('#aabb@c')).toBe(false);
});

test('Invalid hex color should return false', () => {
    expect(functions.isHexColor('#ggggggg')).toBe(false);
});