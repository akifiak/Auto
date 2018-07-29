$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegistrationForm.feature");
formatter.feature({
  "line": 3,
  "name": "Registration",
  "description": "As a user I want to fill my form\r\nalso I submit it",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Form filling and submit",
  "description": "",
  "id": "registration;form-filling-and-submit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates o the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the create account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills firstname field with \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills lastname field with \"\u003cln\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills primary phone with \"\u003cprimary_phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fills company name with \"\u003ccompany_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects company type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fills username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user fills address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user fills City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user fills postal code \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user click on use billing address for shipping",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "form submitted",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "registration;form-filling-and-submit;",
  "rows": [
    {
      "cells": [
        "name",
        "ln",
        "primary_phone",
        "company_name",
        "username",
        "address",
        "city",
        "postalCode"
      ],
      "line": 28,
      "id": "registration;form-filling-and-submit;;1"
    },
    {
      "cells": [
        "Test",
        "Test",
        "5555555555",
        "Test",
        "testUser@mail.com",
        "4250 N Marine Dr",
        "Chicago",
        "60613"
      ],
      "line": 29,
      "id": "registration;form-filling-and-submit;;2"
    },
    {
      "cells": [
        "Two",
        "Sec",
        "6666666666",
        "New",
        "test@ing.com",
        "Whereever",
        "Some",
        "60606"
      ],
      "line": 30,
      "id": "registration;form-filling-and-submit;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4536643133,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Form filling and submit",
  "description": "",
  "id": "registration;form-filling-and-submit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates o the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the create account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills firstname field with \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills lastname field with \"Test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills primary phone with \"5555555555\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fills company name with \"Test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects company type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fills username \"testUser@mail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user fills address \"4250 N Marine Dr\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user fills City \"Chicago\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user fills postal code \"60613\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user click on use billing address for shipping",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "form submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userNavigatesOTheHomepage()"
});
formatter.result({
  "duration": 4138505629,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 1842047107,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 1958641475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstnameFieldWith(String)"
});
formatter.result({
  "duration": 1601117769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userFillsLastnameFieldWith(String)"
});
formatter.result({
  "duration": 183865607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5555555555",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsPrimaryPhoneWith(String)"
});
formatter.result({
  "duration": 246873092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.userFillsCompanyNameWith(String)"
});
formatter.result({
  "duration": 159672165,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 127574242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser@mail.com",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userFillsUsername(String)"
});
formatter.result({
  "duration": 363057764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4250 N Marine Dr",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userFillsAddress(String)"
});
formatter.result({
  "duration": 309156699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chicago",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userFillsCity(String)"
});
formatter.result({
  "duration": 192881361,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 112634128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60613",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.userFillsPostalCode(String)"
});
formatter.result({
  "duration": 135671207,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 24727,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 155341500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 251793332,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "duration": 3030301,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.formSubmitted(MyStepdefs.java:132)\r\n\tat ✽.Then form submitted(RegistrationForm.feature:25)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 8781832348,
  "status": "passed"
});
formatter.before({
  "duration": 3571174026,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Form filling and submit",
  "description": "",
  "id": "registration;form-filling-and-submit;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates o the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the create account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills firstname field with \"Two\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills lastname field with \"Sec\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills primary phone with \"6666666666\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fills company name with \"New\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects company type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fills username \"test@ing.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user fills address \"Whereever\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user fills City \"Some\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user fills postal code \"60606\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user click on use billing address for shipping",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "form submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userNavigatesOTheHomepage()"
});
formatter.result({
  "duration": 3811205425,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 2247925213,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 2213181957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Two",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstnameFieldWith(String)"
});
formatter.result({
  "duration": 1015087023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sec",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userFillsLastnameFieldWith(String)"
});
formatter.result({
  "duration": 162157497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6666666666",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsPrimaryPhoneWith(String)"
});
formatter.result({
  "duration": 232783887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.userFillsCompanyNameWith(String)"
});
formatter.result({
  "duration": 157417136,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 124780546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@ing.com",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userFillsUsername(String)"
});
formatter.result({
  "duration": 261373934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Whereever",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userFillsAddress(String)"
});
formatter.result({
  "duration": 225824375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userFillsCity(String)"
});
formatter.result({
  "duration": 163417617,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 107115099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60606",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.userFillsPostalCode(String)"
});
formatter.result({
  "duration": 242483762,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 26182,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 187824878,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 177992641,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "duration": 287515,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.formSubmitted(MyStepdefs.java:132)\r\n\tat ✽.Then form submitted(RegistrationForm.feature:25)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 8880644907,
  "status": "passed"
});
});