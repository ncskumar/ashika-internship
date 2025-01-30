Feature: Arithmetic functionality

  Scenario: Add two numbers
    Given I have two numbers 2 and 3
    When I add them
    Then the sum should be 5

  Scenario Outline: Subtract multiple sets of numbers
    Given I have the following numbers to subtract: <num1> and <num2>
    When I press the subtract button
    Then the result should be <result>

  Examples:
    | num1 | num2 | result |
    | 3    | 2    | 1      |
    | 10   | 20   | -10    |
    | 8    | 8    | 0      |

  Scenario Outline: Multiply multiple sets of numbers
    Given I have the following numbers to multiply: <num1> and <num2>
    When I multiply them
    Then the result should be <result>

  Examples:
    | num1 | num2 | result |
    | 2    | 3    | 6      |
    | 5    | 5    | 25     |
    | 4    | 0    | 0      |

  Scenario Outline: Divide multiple sets of numbers
    Given I have the following numbers to divide: <num1> and <num2>
    When I divide them
    Then the result should be <result>

  Examples:
    | num1 | num2 | result |
    | 6    | 3    | 2      |
    | 10   | 5    | 2      |
    | 20   | 4    | 5      |
