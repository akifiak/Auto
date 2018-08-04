$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FormSubmit.feature");
formatter.feature({
  "line": 1,
  "name": "Form automation",
  "description": "As a user I want to fill my form\nalso I submit it",
  "id": "form-automation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Form filling and submition",
  "description": "",
  "id": "form-automation;form-filling-and-submition",
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
  "name": "user fills first name with value \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills last name with value \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills date of birth \"\u003cdob\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills address with value \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills company \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select salary",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select expectationOne",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user select expectationTwo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select self developmentOne",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select self developmentTwo",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter \"\u003ccomment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user submit form",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "form is submitted successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "form-automation;form-filling-and-submition;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "dob",
        "address",
        "email",
        "password",
        "company",
        "comment"
      ],
      "line": 27,
      "id": "form-automation;form-filling-and-submition;;1"
    },
    {
      "cells": [
        "Nick",
        "Jackson",
        "08/08/1990",
        "333 W Wacker Dr",
        "test@ing1.com",
        "Testing1",
        "Forte1",
        "Nick\u0027s comment"
      ],
      "line": 28,
      "id": "form-automation;form-filling-and-submition;;2"
    },
    {
      "cells": [
        "Sergii",
        "Opanasiuk",
        "09/09/1999",
        "4250 N Lassal",
        "test@ing2.com",
        "Testing2",
        "Forte2",
        "Sergii\u0027s comment"
      ],
      "line": 29,
      "id": "form-automation;form-filling-and-submition;;3"
    },
    {
      "cells": [
        "Benson",
        "Kamary",
        "05/06/2000",
        "449 N Canal",
        "test@ing3.com",
        "Testing3",
        "Forte3",
        "Benson\u0027s comment"
      ],
      "line": 30,
      "id": "form-automation;form-filling-and-submition;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2781840106,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Form filling and submition",
  "description": "",
  "id": "form-automation;form-filling-and-submition;;2",
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
  "name": "user fills first name with value \"Nick\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills last name with value \"Jackson\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills date of birth \"08/08/1990\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills address with value \"333 W Wacker Dr\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills \"test@ing1.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills password \"Testing1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills company \"Forte1\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select salary",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select expectationOne",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user select expectationTwo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select self developmentOne",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select self developmentTwo",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter \"Nick\u0027s comment\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user submit form",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "form is submitted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.someTestInfo()"
});
formatter.result({
  "duration": 1185271183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nick",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameWithValue(String)"
});
formatter.result({
  "duration": 200257842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jackson",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameForValue(String)"
});
formatter.result({
  "duration": 72597783,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectGender()"
});
formatter.result({
  "duration": 71678511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/08/1990",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userFillsDateOfBirth(String)"
});
formatter.result({
  "duration": 128732059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "333 W Wacker Dr",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsAddressWithValueAddress(String)"
});
formatter.result({
  "duration": 86508565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@ing1.com",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userFills(String)"
});
formatter.result({
  "duration": 72432450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing1",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userFillsPassword(String)"
});
formatter.result({
  "duration": 64681181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forte1",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userFillsCompany(String)"
});
formatter.result({
  "duration": 72279723,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectRole()"
});
formatter.result({
  "duration": 82306869,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSalary()"
});
formatter.result({
  "duration": 48866400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationOne()"
});
formatter.result({
  "duration": 49548583,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationTwo()"
});
formatter.result({
  "duration": 44242887,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentOne()"
});
formatter.result({
  "duration": 61053062,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentTwo()"
});
formatter.result({
  "duration": 64534757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nick\u0027s comment",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnterComment(String)"
});
formatter.result({
  "duration": 70518753,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSubmitForm()"
});
formatter.result({
  "duration": 74564327,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 30468834,
  "status": "passed"
});
formatter.after({
  "duration": 665222466,
  "status": "passed"
});
formatter.before({
  "duration": 2021502051,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Form filling and submition",
  "description": "",
  "id": "form-automation;form-filling-and-submition;;3",
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
  "name": "user fills first name with value \"Sergii\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills last name with value \"Opanasiuk\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills date of birth \"09/09/1999\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills address with value \"4250 N Lassal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills \"test@ing2.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills password \"Testing2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills company \"Forte2\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select salary",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select expectationOne",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user select expectationTwo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select self developmentOne",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select self developmentTwo",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter \"Sergii\u0027s comment\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user submit form",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "form is submitted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.someTestInfo()"
});
formatter.result({
  "duration": 440114696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sergii",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameWithValue(String)"
});
formatter.result({
  "duration": 174843551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Opanasiuk",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameForValue(String)"
});
formatter.result({
  "duration": 74857661,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectGender()"
});
formatter.result({
  "duration": 68178391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/09/1999",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userFillsDateOfBirth(String)"
});
formatter.result({
  "duration": 129106361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4250 N Lassal",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsAddressWithValueAddress(String)"
});
formatter.result({
  "duration": 89696442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@ing2.com",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userFills(String)"
});
formatter.result({
  "duration": 72220087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing2",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userFillsPassword(String)"
});
formatter.result({
  "duration": 61823001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forte2",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userFillsCompany(String)"
});
formatter.result({
  "duration": 60954152,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectRole()"
});
formatter.result({
  "duration": 77273659,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSalary()"
});
formatter.result({
  "duration": 50003855,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationOne()"
});
formatter.result({
  "duration": 46260826,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationTwo()"
});
formatter.result({
  "duration": 45060826,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentOne()"
});
formatter.result({
  "duration": 80912931,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentTwo()"
});
formatter.result({
  "duration": 62461545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sergii\u0027s comment",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnterComment(String)"
});
formatter.result({
  "duration": 78327719,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSubmitForm()"
});
formatter.result({
  "duration": 84272929,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 29514167,
  "status": "passed"
});
formatter.after({
  "duration": 674827794,
  "status": "passed"
});
formatter.before({
  "duration": 2031823015,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Form filling and submition",
  "description": "",
  "id": "form-automation;form-filling-and-submition;;4",
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
  "name": "user fills first name with value \"Benson\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user fills last name with value \"Kamary\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills date of birth \"05/06/2000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills address with value \"449 N Canal\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills \"test@ing3.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills password \"Testing3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills company \"Forte3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select salary",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select expectationOne",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user select expectationTwo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select self developmentOne",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select self developmentTwo",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enter \"Benson\u0027s comment\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user submit form",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "form is submitted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.someTestInfo()"
});
formatter.result({
  "duration": 909462832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benson",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameWithValue(String)"
});
formatter.result({
  "duration": 128421756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kamary",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userFillsFirstNameForValue(String)"
});
formatter.result({
  "duration": 75585902,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectGender()"
});
formatter.result({
  "duration": 80496446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2000",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userFillsDateOfBirth(String)"
});
formatter.result({
  "duration": 130950724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "449 N Canal",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userFillsAddressWithValueAddress(String)"
});
formatter.result({
  "duration": 81508809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@ing3.com",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userFills(String)"
});
formatter.result({
  "duration": 71105421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing3",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userFillsPassword(String)"
});
formatter.result({
  "duration": 63347364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forte3",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userFillsCompany(String)"
});
formatter.result({
  "duration": 62198758,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectRole()"
});
formatter.result({
  "duration": 74018874,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSalary()"
});
formatter.result({
  "duration": 46901796,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationOne()"
});
formatter.result({
  "duration": 44822766,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectExpectationTwo()"
});
formatter.result({
  "duration": 43103010,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentOne()"
});
formatter.result({
  "duration": 60126031,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectSelfDevelopmentTwo()"
});
formatter.result({
  "duration": 64587120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benson\u0027s comment",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnterComment(String)"
});
formatter.result({
  "duration": 73010873,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSubmitForm()"
});
formatter.result({
  "duration": 74559479,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.formIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 29813319,
  "status": "passed"
});
formatter.after({
  "duration": 663020769,
  "status": "passed"
});
});