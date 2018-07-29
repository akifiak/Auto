package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @Given("^user navigates to the app url$")
    public void userNavigatesToTheAppUrl() {
        System.out.println("test");
    }



    @When("^user fills first name \"([^\"]*)\"$")
    public void userFillsFirstName(String name) {

            System.out.println(" Hello"+" "+ name);
    }
}
