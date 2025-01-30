const { Given, When, Then } = require('@cucumber/cucumber');

Given('the user is on the login page', function () {
  console.log('User is on the login page');
});

When('the user enters valid credentials', function () {
  console.log('User enters valid credentials');
});

Then('the user should see the homepage', function () {
  console.log('User sees the homepage');
});
