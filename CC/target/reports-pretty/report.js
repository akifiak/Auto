$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegistrationForm.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author andrii.kifiak@gmail.com"
    }
  ],
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
  "duration": 3862318612,
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
  "duration": 3748072365,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 1617251095,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 1249030667,
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
  "duration": 682720154,
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
  "duration": 80714628,
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
  "duration": 107849160,
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
  "duration": 84141051,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 57443851,
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
  "duration": 180316034,
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
  "duration": 149644534,
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
  "duration": 92981288,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 50710764,
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
  "duration": 90824683,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 22303,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 86068322,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 880484,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.clickSubmit(MyStepdefs.java:125)\r\n\tat ✽.And click submit(RegistrationForm.feature:24)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8688916029,
  "status": "passed"
});
formatter.before({
  "duration": 3217819530,
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
  "duration": 2792308949,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 1765867265,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 424255309,
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
  "duration": 611105643,
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
  "duration": 83741535,
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
  "duration": 130000422,
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
  "duration": 87167473,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 61823000,
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
  "duration": 158893014,
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
  "duration": 133102966,
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
  "duration": 90814501,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 53790034,
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
  "duration": 106599221,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 20849,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 93662500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 257939,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.clickSubmit(MyStepdefs.java:125)\r\n\tat ✽.And click submit(RegistrationForm.feature:24)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8618009883,
  "status": "passed"
});
});