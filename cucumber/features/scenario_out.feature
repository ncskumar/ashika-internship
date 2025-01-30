


 


# Feature:add/edit/remove from cart 

# Scenario:to add a item to the cart

# Given the user is on the product page
# When the user adds 1 item
# Then the item should be available in the cart


Feature: Shopping Cart Management

  Scenario: Add multiple items to the cart
    Given the user is on the product page
    When the user adds 3 items
    Then the items should be available in the cart

  Scenario: Add different items to the cart
    Given the user is on the product page
    When the user adds 2 items
    And the user adds 1 more item
    Then the cart should contain 3 items
