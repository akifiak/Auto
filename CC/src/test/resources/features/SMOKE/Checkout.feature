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
    And filter by collections
    And click link
    Then add to cart button available
    And add to cart button clicked
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








  #//div[@id='overlay']  OR <div id="overlay" class="modal-backdrop fade in" xpath="1"></div>



    Examples:
      | username                  | password  | cardFN   | cardLN | cardNum          | cardCVN | cardName         | searchTerm | mm | yyyy |
      | usertestcsa+co3@gmail.com | Testing1! | FakeUser | VISA   | 4111111111111111 | 333     | Visa             | csa        | 08 | 2025 |
      |                           |           |          |        | 378282246310005  | 4444    | American Express | java       | 09 | 2026 |