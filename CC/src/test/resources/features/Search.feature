Feature: Search Products
  As a user I want to search for a product
  and navigate to it's PDP page.


  Scenario Outline: Login and search

    Given user navigates to the homepage
    When user clicks on the login link
    And enter username "<username>"
    And enter password "<password>"
    And click submit button
    Then user see My Account text
    When user type "<searchTerm>"
    And hit search
    Then see desired product in results
    And navigates to PDP
    Then add to cart button available



    Examples:
      | username                                   | password  | searchTerm |
      | usertestcsa+02/05/2019/11.50.175@gmail.com | Testing1! | C22.1HB-18 |



