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
    When user type "CAN/CSA-C22.2 NO. 61010-2-043-98(R03)PDF"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-Z234.4-89 (R2007)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-ISO/IEC TR 13335-3-01"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-ISO/IEC ISP 10613-19-01"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-Z810-98 (R2003)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "PLUS 1154 (1st ed. pub. 2001)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "Z343-98 (R2002)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-C22.2 NO. 1010.2.041-96(R04)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-ISO/IEC 12061-7-96 (R2000)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "C/C-ISO/IEC ISP 10612-9-99 (R2008)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    And click on cart
    And click on checkout








    Examples:
      | username                          | password  |
      #| usertestcsa+Testingakka@gmail.com | Testing1! |
      | usertestcsa+SMKtestUser@gmail.com | Testing1! |

