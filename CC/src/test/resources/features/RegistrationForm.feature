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
      | name | ln   | primary_phone | company_name | username            | address         | city    | postalCode | password  |
      | Test | Test | 5555555555    | DDDDS0        | testUserd30@mail.com | 333 W Wacker Dr | Chicago | 60606      | Welcome1! |
      | Test | Test | 5555555555    | DDDDS 1       | testUserd31@mail.com | 333 W Wacker Dr | Chicago | 60606      | Welcome1! |
      | Test | Test | 5555555555    | DDDDS  2      | testUserd32@mail.com | 333 W Wacker Dr | Chicago | 60606      | Welcome1! |
      | Test | Test | 5555555555    | DDDDS   3     | testUserd33@mail.com | 333 W Wacker Dr | Chicago | 60606      | Welcome1! |
      | Test | Test | 5555555555    | DDDDS     4   | testUserd34@mail.com | 333 W Wacker Dr | Chicago | 60606      | Welcome1! |