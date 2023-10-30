Feature: Practice test automation - successful login

  Scenario: I am able to login with valid credentials
    Given I navigate to login page
    Then I should see login form
    When I login with the following credentials:
      | username | password    |
      | student  | Password123 |
    Then I should see successful login title