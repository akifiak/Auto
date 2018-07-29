package stepdefs;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import pages.HomePage;

public class MyStepdefs {

    HomePage homePage;
    WebDriver driver;

    @Before
    public void init() {
        System.setProperty("webdriver.chrome.driver", "c:\\chromedriver.exe");
        driver = new ChromeDriver();
        homePage = new HomePage(driver);
    }

    @Given("^user navigates to the app url$")
    public void someTestInfo() {

        driver.get("http://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");
    }

    @When("^user fills first name with value \"([^\"]*)\"$")
    public void userFillsFirstNameWithValue(String firstName) {

        homePage.setFirstName(firstName);
    }

    @When("^user fills last name with value \"([^\"]*)\"$")
    public void userFillsFirstNameForValue(String lastName) {

        homePage.setLastName(lastName);
    }


    @When("^user Select Gender$")
    public void userSelectGender() throws Throwable {
        homePage.userGen();

    }

    @When("^user fills date of birth \"([^\"]*)\"$")
    public void userFillsDateOfBirth(String dob) throws Throwable {
        homePage.setDOB(dob);
    }


    @When("^user fills address with value \"([^\"]*)\"$")
    public void userFillsAddressWithValueAddress(String address) {

        homePage.setAddress(address);
    }

    @When("^user fills \"([^\"]*)\"$")
    public void userFills(String email) throws Throwable {
        homePage.setEmail(email);
    }


    @When("^user fills password \"([^\"]*)\"$")
    public void userFillsPassword(String password) throws Throwable {
        homePage.setPassword(password);
    }

    @When("^user fills company \"([^\"]*)\"$")
    public void userFillsCompany(String company) throws Throwable {
        homePage.setCompany(company);
    }

    @When("^user select role$")
    public void userSelectRole() throws Throwable {
        Select dropDown = new Select(driver.findElement(By.id("role")));
        dropDown.selectByVisibleText("QA");
    }

    @When("^user select salary$")
    public void userSelectSalary() throws Throwable {
        homePage.setSalary();
    }

    @When("^user select expectationOne$")
    public void userSelectExpectationOne() throws Throwable {
        homePage.setExpects();
    }

    @When("^user select expectationTwo$")
    public void userSelectExpectationTwo() throws Throwable {
        homePage.setExpects2();
    }

    @When("^user select self developmentOne$")
    public void userSelectSelfDevelopmentOne() throws Throwable {
        homePage.develop();
    }

    @When("^user select self developmentTwo$")
    public void userSelectSelfDevelopmentTwo() throws Throwable {
        homePage.develop2();
    }

    @When("^user enter \"([^\"]*)\"$")
    public void userEnterComment(String comment) throws Throwable {
        homePage.setComment(comment);
    }

    @When("^user submit form$")
    public void userSubmitForm() throws Throwable {
        homePage.submitting();
    }

    @Then("^form is submitted successfully$")
    public void formIsSubmittedSuccessfully() throws Throwable {
        homePage.ver();
    }

    @After
        public void close() throws Throwable {
            driver.close();
            driver.quit();
    }

}
