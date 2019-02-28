Feature: Registration
  As a user I want to fill my form
  also I submit it

  Scenario Outline: Form filling and submit

    Given user navigates to the homepage
    When user clicks on the login link
    And user clicks on the create account
    And user fills firstname field with "<name>"
    And user fills lastname field with "<ln>"
    And user fills primary phone with "<primary_phone>"
    And user selects preferred language as "<language>"
    And user fills company name
    And user selects company type "<companyType>"
    And user selects job function "<jobFunction>"
    #And user fills username "<username*>"
    And user name has been set
    And user fills password "<password>"
    And user fills password again "<password>"
    And user fills address "<address>"
    And user selects country "<country>"
    And user fills City "<city>"
    And user selects state "<state>"
    And user fills postal code "<postalCode>"
    And user click on use billing address for shipping
    And mark terms
    And mark consent
    And click submit
    Then form submitted
#usertestcsa+01/15/2019/15.21.114@gmail.com - test user.

    Examples:
      | name   | ln   | primary_phone | company_name* | username*                 | address             | city            | postalCode | password  | country | state  | companyType   | jobFunction | language |
     # | Test | Test | 5555555555    | My Demo Comp      | usertestcsa+68888@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
      #| Test | Test | 5555555555    | Demo corp     | usertestcsa+192837465@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
     # | Andrii | Test | 5555555555    | newuser | usertestcsa+kdskskskkk@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
     # | Joe | Test | 5555555555    | JoeIPuser | usertestcsa+JoeIPuserTest@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
      #| AK   | NewUser | 5555555555    | TestingUSer   | usertestcsa+Testingakka@gmail.com | 333 W Wacker | Chicago | 60606      | Testing1! |
      #| AK   | NewUser | 5555555555    | RegistrationPage | usertestcsa+RegPage@gmail.com | 333 W Wacker | Chicago | 60606      | Testing1! |
      #| AK   | NewUser | 5555555555    | RegistrationPageOne | usertestcsa+RegPageOne@gmail.com | 333 W Wacker | Chicago | 60606      | Testing1! |
      #| Andrii | Test | 5555555555    | testusertesttest       | usertestcsa+newsmoketest@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
      #| Andrii | Test | 5555555555    | SMKTestUser       | usertestcsa+SMKtestUser@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
#      | Andrii | Test | 5555555555    | Visa       | usertestcsa+Visa@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
#      | Andrii | Test | 5555555555    | MasterCard      | usertestcsa+mastercard@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
   #  | Andrii | Test | 5555555555    | Amex       | usertestcsa+amex@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! |
#      | Andrii | Test | 5555555555    | new | usertestcsa+new@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! | Canada  | Quebec | Manufacturing | Operator    | French   |
    #  | Andrii | Test | 5555555555    | storedCard | usertestcsa+cc@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! | Canada  | Quebec | Educational services | Operator    | French   |
      | Andrii | Test | 5555555555    | savedCard     | usertestcsa+333@gmail.com | 10 Rue de l'Espinay | Ville de Quebec | G1L 3L5    | Testing1! | Canada  | Quebec | Manufacturing | Operator    | French  |
