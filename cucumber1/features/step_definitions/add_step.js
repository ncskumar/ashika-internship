const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let num1, num2, result;

// Step definition for adding two numbers
Given('I have two numbers {int} and {int}', function (a, b) {
  num1 = a;
  num2 = b;
});


Given('I have the following numbers to subtract: {int} and {int}', function (a, b) {
  num1 = a;
  num2 = b;
});

Given('I have the following numbers to multiply: {int} and {int}', function (a, b) {
  num1 = a;
  num2 = b;
});


Given('I have the following numbers to divide: {int} and {int}', function (a, b) {
  num1 = a;
  num2 = b;
});


When('I add them', function () {
  result = num1 + num2;
});


When('I press the subtract button', function () {
  result = num1 - num2;
});

When('I multiply them', function () {
  result = num1 * num2;
});


When('I divide them', function () {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed");
  }
  result = num1 / num2;
});


Then('the sum should be {int}', function (expected) {
  assert.strictEqual(result, expected, `Expected ${expected} but got ${result}`);
});


Then('the result should be {int}', function (expected) {
  assert.strictEqual(result, expected, `Expected ${expected} but got ${result}`);
});
