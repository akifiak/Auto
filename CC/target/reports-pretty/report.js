$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegistrationForm.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "As a user I want to fill my form\r\nalso I submit it",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Form filling and submit",
  "description": "",
  "id": "registration;form-filling-and-submit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user navigates o the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the create account",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills firstname field with \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills lastname field with \"\u003cln\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills primary phone with \"\u003cprimary_phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills company name with \"\u003ccompany_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user selects company type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fills username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user fills address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fills City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user selects state",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user fills postal code \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click on use billing address for shipping",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "form submitted",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
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
      "line": 25,
      "id": "registration;form-filling-and-submit;;1"
    },
    {
      "cells": [
        "Andrii",
        "Kifiak",
        "5555555555",
        "Test",
        "testUser@mail.com",
        "4250 N Marine Dr",
        "Chicago",
        "60613"
      ],
      "line": 26,
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
      "line": 27,
      "id": "registration;form-filling-and-submit;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5431423791,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Form filling and submit",
  "description": "",
  "id": "registration;form-filling-and-submit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user navigates o the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the create account",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills firstname field with \"Andrii\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills lastname field with \"Kifiak\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills primary phone with \"5555555555\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills company name with \"Test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user selects company type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fills username \"testUser@mail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user fills address \"4250 N Marine Dr\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fills City \"Chicago\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user selects state",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user fills postal code \"60613\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click on use billing address for shipping",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "form submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userNavigatesOTheHomepage()"
});
formatter.result({
  "duration": 9926330702,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 4702481599,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 2572909783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andrii",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstnameFieldWith(String)"
});
formatter.result({
  "duration": 1008963874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kifiak",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userFillsLastnameFieldWith(String)"
});
formatter.result({
  "duration": 319780208,
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
  "duration": 417637131,
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
  "duration": 307057305,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 205734203,
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
  "duration": 674196036,
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
  "duration": 624434606,
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
  "duration": 266322780,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 174254461,
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
  "duration": 285492710,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 38303,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 261270661,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 3706665,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.clickSubmit(MyStepdefs.java:125)\r\n\tat ✽.And click submit(RegistrationForm.feature:22)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8820348694,
  "status": "passed"
});
formatter.before({
  "duration": 3556057912,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Form filling and submit",
  "description": "",
  "id": "registration;form-filling-and-submit;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user navigates o the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the create account",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills firstname field with \"Two\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills lastname field with \"Sec\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills primary phone with \"6666666666\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills company name with \"New\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user selects company type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fills username \"test@ing.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user fills address \"Whereever\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fills City \"Some\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user selects state",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user fills postal code \"60606\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click on use billing address for shipping",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "form submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userNavigatesOTheHomepage()"
});
formatter.result({
  "duration": 3393222597,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 3512649933,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 2540766768,
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
  "duration": 1244981699,
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
  "duration": 255868967,
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
  "duration": 439035423,
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
  "duration": 287449073,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 219340500,
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
  "duration": 568422997,
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
  "duration": 405071804,
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
  "duration": 122005759,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 84228323,
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
  "duration": 271895141,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 84364,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 280025077,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 460121,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.clickSubmit(MyStepdefs.java:125)\r\n\tat ✽.And click submit(RegistrationForm.feature:22)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8798436462,
  "status": "passed"
});
});