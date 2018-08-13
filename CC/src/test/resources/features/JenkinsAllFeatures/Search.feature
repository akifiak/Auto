Feature: Search Products
  As a user I want to search for a product
  and navigate to it's PDP page.


  Scenario Outline: Login and search

    Given user navigates o the homepage
    When user clicks on the login link
    And enter username "<username>"
    And enter password "<password>"
    And click submit button
    Then user see My Account text
    When user type search term "<searchTerm>"
    And hit search
    Then see results


    Examples:
      | username                    | password  | searchTerm |
      | avi4.20.18.3@mailinator.com | Welcome1! | Standart   |
