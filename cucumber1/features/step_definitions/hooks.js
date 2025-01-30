const { Given, When, Then, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const assert = require('assert');

let currentUser = null;

BeforeAll(function () {
  console.log("Before Scenario: Starting a new user session");
  currentUser = null;  // Reset user session
});

AfterAll(function () {
  console.log("After Scenario: Ending user session");
  currentUser = null;  // Clear the user session after each scenario
});

Given('I am a logged-in user with username {string}', function (username) {
  currentUser = { username };
  console.log(`Given: User is logged in as ${username}`);
});

When('I log out', function () {
  console.log("When: Logging out");
  currentUser = null;
});

Then('I should not be logged in', function () {
  console.log("Then: Verifying that the user is logged out");
  assert.strictEqual(currentUser, null, "User should not be logged in");
});
