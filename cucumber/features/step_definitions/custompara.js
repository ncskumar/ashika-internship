const { Given, When, Then, defineParameterType } = require('@cucumber/cucumber');

// Define a custom parameter for roles
defineParameterType({
    name: 'role',
    regexp: /admin|employee|manager/, // Matches admin, employee, or manager
    transformer: (role) => role, // Returns the matched role
});

Given('a {role} is on the login page', function (role) {
    console.log(`${role} is on the login page.`);
});

When('the {role} enters valid credentials', function (role) {
    console.log(`${role} enters valid credentials.`);
});

Then('the {role} should see the dashboard', function (role) {
    console.log(`${role} sees the dashboard.`);
});
