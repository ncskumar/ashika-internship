Feature: Login Access for Different Roles

  Scenario: Admin login access
    Given a admin is on the login page
    When the admin enters valid credentials
    Then the admin should see the dashboard

  Scenario: Employee login access
    Given a employee is on the login page
    When the employee enters valid credentials
    Then the employee should see the dashboard

  Scenario: Manager login access
    Given a manager is on the login page
    When the manager enters valid credentials
    Then the manager should see the dashboard
