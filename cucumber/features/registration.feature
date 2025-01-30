# Feature: registration functionality
#  Background: Given  the user on the registration page 

#  Scenario: successful registration

#  When the user presses the register button
#  Then the user should be navigated to the new user's registration page

Feature: Registration functionality
  Background: 
    Given the user is on the registration page

  Scenario: Registration for a new user
    When the user is not already registered
    And the user presses the register button
    Then the user should be navigated to the new user's registration page

  Scenario: Registration attempt for an already registered user
    When the user is already registered
    And the user presses the register button
    Then the user should see a message indicating the user is already registered
