Feature: User Authentication with hooks

  Scenario: User logs in and out
    Given I am a logged-in user with username "John"
    When I log out
    Then I should not be logged in
