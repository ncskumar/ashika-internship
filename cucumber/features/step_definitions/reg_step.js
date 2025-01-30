// 



const { Given, When, Then } = require("@cucumber/cucumber");

Given('the user is on the registration page', function () {
  console.log('The user is on the registration page');
});

When('the user is not already registered', function () {
  console.log('The user is not already registered');
});

When('the user presses the register button', function () {
  console.log('The user presses the register button');
});

Then('the user should be navigated to the new user\'s registration page', function () {
  console.log('The user is successfully registered and navigated to the new user\'s registration page');
});

When('the user is already registered', function () {
  console.log('The user is already registered');
});

Then('the user should see a message indicating the user is already registered', function () {
  console.log('The user sees a message indicating they are already registered');
});
