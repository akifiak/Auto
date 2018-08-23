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
    And user fills company name with "<company_name*>"
    And user selects company type
    And user selects job function
    And user fills username "<username*>"
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
      | name | ln   | primary_phone | company_name* | username*                  | address             | city            | postalCode | password  |
     # | Test | Test | 5555555555    | My Demo Comp      | usertestcsa+68888@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
      #| Test | Test | 5555555555    | Demo corp     | usertestcsa+192837465@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
      | Test | Test | 5555555555    | Demo testing2     | Serhii_Test@mailinator.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |