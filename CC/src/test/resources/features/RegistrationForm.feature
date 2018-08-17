Feature: Registration
  As a user I want to fill my form
  also I submit it

  Scenario Outline: Form filling and submit

    Given user navigates to the homepage
    When user clicks on the login link
    And user clicks on the create account
    And user fills firstname field with "<name>"
    And user fills lastname field with "<ln>"
    And user fills primary phone with "<primary_phone>"
    And user selects preferred language as English
    And user fills company name with "<company_name>"
    And user selects company type
    And user selects job function
    And user fills username "<username>"
    And user fills password "<password>"
    And user fills password again "<password>"
    And user fills address "<address>"
    And user selects country
    And user fills City "<city>"
    And user selects state
    And user fills postal code "<postalCode>"
    And user click on use billing address for shipping
    And mark terms
    And mark consent
    And click submit
    Then form submitted

    Examples:
      | name | ln   | primary_phone | company_name       | username                | address         | city    | postalCode | password  |
      | Test | Test | 5555555555    | CC_IvanVasilievich | usertestcsa+2@gmail.com | 333 W Wacker Dr | Chicago | 60606      | Testing1! |
