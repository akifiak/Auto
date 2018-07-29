Feature: Form automation
  As a user I want to fill my form
  also I submit it

  Scenario Outline: Form filling and submition
    Given user navigates to the app url
    When user fills first name with value "<firstName>"
    And user fills last name with value "<lastName>"
    And user Select Gender
    And user fills date of birth "<dob>"
    And user fills address with value "<address>"
    And user fills "<email>"
    And user fills password "<password>"
    And user fills company "<company>"
    And user select role
    And user select salary
    And user select expectationOne
    And user select expectationTwo
    And user select self developmentOne
    And user select self developmentTwo
    And user enter "<comment>"
    And user submit form

    Then form is submitted successfully

    Examples:
      | firstName | lastName  | dob        | address         | email         | password | company | comment          |
      | Nick      | Jackson   | 08/08/1990 | 333 W Wacker Dr | test@ing1.com | Testing1 | Forte1  | Nick's comment   |
      | Sergii    | Opanasiuk | 09/09/1999 | 4250 N Lassal   | test@ing2.com | Testing2 | Forte2  | Sergii's comment |
      | Benson    | Kamary    | 05/06/2000 | 449 N Canal     | test@ing3.com | Testing3 | Forte3  | Benson's comment |

