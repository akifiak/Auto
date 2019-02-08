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
    When user type "Z32-15"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "C22.2 NO. 58-M1989 (R2015)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-ISO 13857:15"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "C22.2 NO. 250.1-16"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "C22.2 NO. 124-16"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-M5673-2-07 (R2017)"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "CAN/CSA-C22.2 NO. 62841-2-5:16"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    When user type "B621-14"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    And click on cart
    And click on checkout
    And click continue button on Contact Information
    And click on shipment page a continue button
    And click proceed payment
    And provide payment card First Name "<cardFN>"
    And fill payment card Last Name "<cardLN>"
    And fill payment card number "<cardNum>"
    And select card type "<cardName>"
    And select card expiration month "<mm>"
    And select card expiration year "<yyyy>"
    And enter CVN code "<cardCVN>"
    And click on Process Payment button
    Then thank you message is displayed







    Examples:
      | username                                   | password  | cardFN | cardLN | cardNum          | cardName | mm | yyyy | cardCVN |
#      | usertestcsa+Testingakka@gmail.com          | Testing1! |
#      | usertestcsa+SMKtestUser@gmail.com          | Testing1! |
#      | usertestcsa+Visa@gmail.com                 | Testing1! |
#      | usertestcsa+subcreated@gmail.com           | Testing1! |
#      | usertestcsa+10/04/2018/16.52.23@gmail.com  | Testing1! |
#      | usertestcsa+10/09/2018/14.20.167@gmail.com | Testing1! |
      | usertestcsa+02/05/2019/11.50.175@gmail.com | Testing1! | AK     | KA     | 4111111111111111 | Visa     | 12 | 2020 | 773     |

