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
  "duration": 3959849677,
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
  "duration": 1790126929,
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
  "duration": 341525499,
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
  "duration": 160778259,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickSubmit()"
});
formatter.result({
  "duration": 1918306385,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectCategory()"
});
formatter.result({
  "duration": 1531034924,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickBlouse()"
});
formatter.result({
  "duration": 1134169277,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userAddToCart()"
});
formatter.result({
  "duration": 121958362,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickProceed()"
});
formatter.result({
  "duration": 3136275945,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userVerifyAddress()"
});
formatter.result({
  "duration": 113382843,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickCheckout()"
});
formatter.result({
  "duration": 916070262,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueOne()"
});
formatter.result({
  "duration": 955011372,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueTwo()"
});
formatter.result({
  "duration": 124159576,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueThree()"
});
formatter.result({
  "duration": 896437768,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueFour()"
});
formatter.result({
  "duration": 723634290,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickContinueFive()"
});
formatter.result({
  "duration": 1371420786,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userVerifyPrice()"
});
formatter.result({
  "duration": 74135309,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userVerifyMessage()"
});
formatter.result({
  "duration": 78144522,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userGoBack()"
});
formatter.result({
  "duration": 1307150210,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userVerifyOrderpresence()"
});
formatter.result({
  "duration": 74182,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userLogout()"
});
formatter.result({
  "duration": 1172085417,
  "status": "passed"
});
formatter.after({
  "duration": 866937632,
  "status": "passed"
});
});