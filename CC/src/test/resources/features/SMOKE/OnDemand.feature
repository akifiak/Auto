Feature: OnDemand

  Scenario Outline:User navigates to OnDeman products

    Given user navigates to the homepage
    When user clicks on the login link
    And enter username "<username>"
    And enter password "<password>"
    And click submit button
    Then user see My Account text
    And user clicks on the OnDemand link
    Then My Library button is present
    And user click on the My library button
    Then user see documents


    Examples:
      | username                  | password  |
      | usertestcsa+co2@gmail.com | Testing1! |