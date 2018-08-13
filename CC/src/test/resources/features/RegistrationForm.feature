

Feature: Registration
  As a user I want to fill my form
  also I submit it

  Scenario Outline: Form filling and submit

    Given user navigates o the homepage
    When user clicks on the login link
    And user clicks on the create account
    And user fills firstname field with "<name>"
    And user fills lastname field with "<ln>"
    And user fills primary phone with "<primary_phone>"
    And user selects preferred language
    And user fills company name with "<company_name>"
    And user selects company type
    And user fills username "<username>"
    And user fills address "<address>"
    And user fills City "<city>"
    And user selects state
    And user fills postal code "<postalCode>"
    And user selects country
    And user click on use billing address for shipping
    And click submit
    Then form submitted

    Examples:
      | name | ln   | primary_phone | company_name | username          | address          | city    | postalCode |
      | Test | Test | 5555555555    | Test         | testUser@mail.com | 4250 N Marine Dr | Chicago | 60613      |
