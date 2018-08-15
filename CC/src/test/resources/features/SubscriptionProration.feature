Feature:
  As an academia user I want to purchase a collection
  and verify that price is based on the size of University - L, M, S.

  Scenario Outline: Academia L - account purchase a collection
    Given user navigates o the homepage
    When user clicks on the login link
    And enter username "<username>"
    And enter password "<password>"
    And click submit button
    Then user see My Account text
    When user type search term "<searchTerm>"
    And hit search
    And click link
    Then add to cart button available
    When add to cart button clicked
    And click on cart





    Examples:
      | username                    | password  | searchTerm |
      | avi4.20.18.3@mailinator.com | Welcome1! | Standart   |