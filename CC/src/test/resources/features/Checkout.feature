Feature: Checkout

  Scenario Outline: User purchasing a product

    Given user navigates to the homepage
    When user clicks on the login link
    And enter username "<username>"
    And enter password "<password>"
    And click submit button
    Then user see My Account text
    When user type "<searchTerm>"
    And hit search
    And click link
    Then add to cart button available
    And add to cart button clicked
    And click on cart
    And click on checkout
    And click continue button on Contact Information
    And click on shipment page a continue button
    And click proceed payment
    And provide payment card first name "<cardFN>"
    And fill payment card last name "<cardLN>"
    And fill payment card number "<cardNum>"
    And select card type "<cardName>"
    And select card expiration month "<mm>"
    And select card expiration year "<yyyy>"
    And enter CVN code "<cardCVN>"
    And click on process payment button
    Then thank you message is displayed












    Examples:
      | username                   | password  | cardFN  | cardLN | cardNum          | cardCVN | cardName | searchTerm | mm | yyyy |
#      | usertestcsa+Testingakka@gmail.com   | Testing1! | ddddddd | dddddd                  | 4111111111111111    | 333     |
#      | usertestcsa+68888@gmail.com         | Testing1! | ddddddd | Mastercard              | 5555555555554444    | 333     |
#      | usertestcsa+192837465@gmail.com     | Testing1! | ddddddd | Mastercard              | 5555555555554444    | 333     |
#      | usertestcsa+kdskskskkk@gmail.com    | Testing1! | ddddddd | Mastercard              | 5555555555554444    | 333     |
#      | usertestcsa+JoeIPuserTest@gmail.com | Testing1! | ddddddd | UATP                    | 135412345678911     | 333     |
#      | usertestcsa+Testingakka@gmail.com   | Testing1! | ddddddd | Mastercard              | 5555555555554444    | 333     |
#      | usertestcsa+RegPage@gmail.com       | Testing1! | ddddddd | Mastercard              | 2222630000001125    | 333     |
#      | usertestcsa+RegPageOne@gmail.com    | Testing1! | ddddddd | Mastercard              | 2222420000001113    | 333     |
#      | usertestcsa+newsmoketest@gmail.com  | Testing1! | ddddddd | Maestro (UK Domestic)   | 5641821111166669    | 333     |
#      | usertestcsa+SMKtestUser@gmail.com   | Testing1! | ddddddd | Maestro (UK Domestic)   | 6759560045005727054 | 333     |
#      | usertestcsa+SMKtestUser@gmail.com   | Testing1! | ddddddd | Maestro (UK Domestic)   | 6759411100000008    | 333     |
#      | usertestcsa+SMKtestUser@gmail.com   | Testing1! | ddddddd | Maestro (International) | 586824160825533338  | 333     |
#      | usertestcsa+SMKtestUser@gmail.com   | Testing1! | ddddddd | Maestro (International) | 50339619890917      | 333     |
#      | usertestcsa+SMKtestUser@gmail.com   | Testing1! | ddddddd | JCB                     | 3566111111111113    | 333     |
#      | usertestcsa+SMKtestUser@gmail.com   | Testing1! | ddddddd | VISA                    | 4111111111111111    | 333     |
#      | usertestcsa+SMKtestUser@gmail.com   | Testing1! | ddddddd | Discovery               | 6011111111111117    | 333     |
#      | usertestcsa+Orderuser@gmail.com     | Testing1! | ddddddd | AMEX                    | 378282246310005     | 4444    |
      | usertestcsa+Visa@gmail.com | Testing1! | ddddddd | VISA   | 4111111111111111 | 333     | Visa     | Collection |    |      |