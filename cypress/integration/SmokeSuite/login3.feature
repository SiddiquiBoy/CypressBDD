Feature: Login feature 3

Scenario: login valid scenario
    Given User launch login url
    When User enter username "student"
    And User enter password "Password123"
    And User click login button
    Then User should be logged in successfully

Scenario: login invalid scenario
    Given User launch login url
    When User enter username "student"
    And User enter password "Password1234"
    And User click login button
    Then User should not be logged in successfully
