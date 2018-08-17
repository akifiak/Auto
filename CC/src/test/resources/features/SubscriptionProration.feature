Feature:
  As an academia user I want to purchase a collection
  and verify that price is based on the size of University - L, M, S.

  Scenario Outline: account purchase a 10 subscriptions
    Given user navigates to the homepage
    When user clicks on the login link
    And enter username "<username>"
    And enter password "<password>"
    And click submit button
    Then user see My Account text
    When user type search term "csa"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    And click on cart
    When user type "standart"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    And click on cart







    Examples:
      | username                | password  |
      | usertestcsa+2@gmail.com | Testing1! |

