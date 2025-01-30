


// const { Given, When, Then } = require('@cucumber/cucumber');
// const assert = require('assert');

// Given('the user is on the product page', function () {
//     console.log('Navigated to product page');
//     this.cart = []; // Initialize the cart
// });

// When('the user adds {int} item', function (int) {
//     this.cart.push(int); // Add the item to the cart
//     console.log(`Added ${int} item(s) to the cart.`);
// });

// Then('the item should be available in the cart', function () {
//     assert.strictEqual(this.cart.length, 1); // Check if the cart has 1 item
//     console.log('The item is available in the cart');
// });


const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('the user is on the product page', function () {
    console.log('Navigated to product page');
    this.cart = []; // Initialize the cart
});

When('the user adds {int} items', function (int) {
    for (let i = 0; i < int; i++) {
        this.cart.push(1); // Add 1 item for each iteration
    }
    console.log(`Added ${int} item(s) to the cart.`);
});

When('the user adds {int} more items', function (int) {
    for (let i = 0; i < int; i++) {
        this.cart.push(1); // Add 1 item for each iteration
    }
    console.log(`Added ${int} more item(s) to the cart.`);
});

// New step to handle the singular form "item"
When('the user adds {int} more item', function (int) {
    for (let i = 0; i < int; i++) {
        this.cart.push(1); // Add 1 item for each iteration
    }
    console.log(`Added ${int} more item(s) to the cart.`);
});

Then('the items should be available in the cart', function () {
    assert.strictEqual(this.cart.length, 3); // Check if the cart has 3 items
    console.log('The items are available in the cart');
});

Then('the cart should contain {int} items', function (expectedCount) {
    assert.strictEqual(this.cart.length, expectedCount); // Check if the cart has the expected number of items
    console.log(`The cart contains ${expectedCount} items.`);
});
