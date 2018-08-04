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
    },
    {
      "cells": [
        "Two",
        "Sec",
        "7777777777",
        "New",
        "test@ing.com",
        "Whereever",
        "Some",
        "60606"
      ],
      "line": 31,
      "id": "registration;form-filling-and-submit;;4"
    },
    {
      "cells": [
        "Two",
        "Sec",
        "8888888888",
        "New",
        "test@ing.com",
        "Whereever",
        "Some",
        "60606"
      ],
      "line": 32,
      "id": "registration;form-filling-and-submit;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3767363022,
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
  "duration": 3124184183,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 1369945033,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 1328665053,
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
  "duration": 574298873,
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
  "duration": 78806265,
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
  "duration": 128206483,
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
  "duration": 76668084,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 57145184,
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
  "duration": 182819305,
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
  "duration": 158737378,
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
  "duration": 108735947,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 54446034,
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
  "duration": 94654014,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 35879,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 91940320,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 83139353,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "duration": 994424,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.formSubmitted(MyStepdefs.java:133)\r\n\tat ✽.Then form submitted(RegistrationForm.feature:25)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 745607880,
  "status": "passed"
});
formatter.before({
  "duration": 3149448654,
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
  "duration": 2597581286,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 1832799111,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 1243768610,
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
  "duration": 655108046,
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
  "duration": 80650628,
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
  "duration": 113208187,
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
  "duration": 75054024,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 54849427,
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
  "duration": 158784893,
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
  "duration": 126337878,
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
  "duration": 73317782,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 53519004,
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
  "duration": 96753407,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 19394,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 97060802,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 95116560,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "duration": 158061,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.formSubmitted(MyStepdefs.java:133)\r\n\tat ✽.Then form submitted(RegistrationForm.feature:25)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 2847715467,
  "status": "passed"
});
formatter.before({
  "duration": 3152598229,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Form filling and submit",
  "description": "",
  "id": "registration;form-filling-and-submit;;4",
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
  "name": "user fills primary phone with \"7777777777\"",
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
  "duration": 2933576760,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 578064690,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 1087999958,
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
  "duration": 566734271,
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
  "duration": 89639229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7777777777",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsPrimaryPhoneWith(String)"
});
formatter.result({
  "duration": 133223208,
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
  "duration": 84439232,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 61055000,
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
  "duration": 165619798,
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
  "duration": 133830238,
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
  "duration": 96211832,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 54014519,
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
  "duration": 102012557,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 12122,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 119557761,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 110284553,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "duration": 228848,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.formSubmitted(MyStepdefs.java:133)\r\n\tat ✽.Then form submitted(RegistrationForm.feature:25)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 2854248798,
  "status": "passed"
});
formatter.before({
  "duration": 3148367444,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Form filling and submit",
  "description": "",
  "id": "registration;form-filling-and-submit;;5",
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
  "name": "user fills primary phone with \"8888888888\"",
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
  "duration": 2018566294,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheLoginLink()"
});
formatter.result({
  "duration": 580521900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnTheCreateAccount()"
});
formatter.result({
  "duration": 2373038364,
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
  "duration": 647742232,
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
  "duration": 88834866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8888888888",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsPrimaryPhoneWith(String)"
});
formatter.result({
  "duration": 137927690,
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
  "duration": 86621049,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCompanyType()"
});
formatter.result({
  "duration": 58245305,
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
  "duration": 169581978,
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
  "duration": 128595332,
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
  "duration": 83468081,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsState()"
});
formatter.result({
  "duration": 52749066,
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
  "duration": 112301521,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsCountry()"
});
formatter.result({
  "duration": 27151,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnUseBillingAddressForShipping()"
});
formatter.result({
  "duration": 92287955,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickSubmit()"
});
formatter.result({
  "duration": 94046015,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formSubmitted()"
});
formatter.result({
  "duration": 286545,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefs.MyStepdefs.formSubmitted(MyStepdefs.java:133)\r\n\tat ✽.Then form submitted(RegistrationForm.feature:25)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 2605248676,
  "status": "passed"
});
});