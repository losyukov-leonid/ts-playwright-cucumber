Feature: Practice test automation - login with invalid credentials

  Second Example has correct credentials to simulate the issue with allure

  Scenario Outline: I expect not to be able to login with invalid credentials and to see validation message
    Given I navigate to login page
    Then I should see login form
    When I enter "<username>" username
    And I enter "<password>" password
    And I click login button
    Then I should see invalid credentials error

    Examples:
      | username      | password          |
      | incorrectUser | Password123       |
      | student       | Password123       |
      | student       | incorrectPassword |
