$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Form automation",
  "description": "As a user I want to login and purchase items",
  "id": "form-automation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "eShop purchase",
  "description": "",
  "id": "form-automation;eshop-purchase",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to the app url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user fills username with value \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills password with value \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user select category",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click blouse",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click proceed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify address",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click continueOne",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click continueTwo",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click continueThree",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click continueFour",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click continueFive",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user verify price",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user verify message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user go back",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verify orderPresence",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user logout",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "form-automation;eshop-purchase;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "form-automation;eshop-purchase;;1"
    },
    {
      "cells": [
        "akifa@mailinator.com",
        "Testing1!"
      ],
      "line": 30,
      "id": "form-automation;eshop-purchase;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2694214896,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "eShop purchase",
  "description": "",
  "id": "form-automation;eshop-purchase;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to the app url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user fills username with value \"akifa@mailinator.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills password with value \"Testing1!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user select category",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click blouse",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click proceed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify address",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click continueOne",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click continueTwo",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click continueThree",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click continueFour",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click continueFive",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user verify price",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user verify message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user go back",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verify orderPresence",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user logout",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.someTestInfo()"
});
formatter.result({
  "duration": 2102333862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akifa@mailinator.com",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userFillsUsernameWithValue(String)"
});
formatter.result({
  "duration": 167268039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing1!",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.userFillsPasswordWithValue(String)"
});
formatter.result({
  "duration": 89857280,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickSubmit()"
});
formatter.result({
  "duration": 1255471989,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectCategory()"
});
formatter.result({
  "duration": 1266006757,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickBlouse()"
});
formatter.result({
  "duration": 1386176705,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userAddToCart()"
});
formatter.result({
  "duration": 65421449,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickProceed()"
});
formatter.result({
  "duration": 2882806045,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userVerifyAddress()"
});
formatter.result({
  "duration": 45960153,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickCheckout()"
});
formatter.result({
  "duration": 647909047,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueOne()"
});
formatter.result({
  "duration": 642468572,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueTwo()"
});
formatter.result({
  "duration": 62078910,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueThree()"
});
formatter.result({
  "duration": 639882880,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueFour()"
});
formatter.result({
  "duration": 563275998,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueFive()"
});
formatter.result({
  "duration": 1235112756,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userVerifyPrice()"
});
formatter.result({
  "duration": 34322842,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userVerifyMessage()"
});
formatter.result({
  "duration": 31982483,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userGoBack()"
});
formatter.result({
  "duration": 1037413746,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userVerifyOrderpresence()"
});
formatter.result({
  "duration": 79514,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userLogout()"
});
formatter.result({
  "duration": 1101043683,
  "status": "passed"
});
formatter.after({
  "duration": 798475542,
  "status": "passed"
});
});