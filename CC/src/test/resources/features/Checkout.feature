Feature: Checkout

  Scenario Outline: User purchasing a product

    Given user navigates to the homepage
    When user clicks on the login link
    And enter username "<username>"
    And enter password "<password>"
    And click submit button
    Then user see My Account text
    When user type "C22.1HB-18"
    And hit search
    And click link
    Then add to cart button available
    And add to cart button clicked
    And click on cart
    And click on checkout
    And click continue button on Contact Information
    And click on shipment page continue a continue button
    And click proceed payment
    And provide payment card First Name "<CardFN>"
    And fill payment card Last Name "<CardLN>"
    And fill payment card number "<CardNum>"
    And select card type
    And select card expiration month
    And select card expiration year
    And enter CVN code "<CardCVN>"
    And click on Process Payment button












    Examples:
      | username                          | password  | CardFN  | CardLN | CardNum          | CardCVN |
      #| usertestcsa+Testingakka@gmail.com | Testing1! | ddddddd | dddddd | 4111111111111111 | 333     |
      | usertestcsa+SMKtestUser@gmail.com | Testing1! | ddddddd | dddddd | 4111111111111111 | 333     |