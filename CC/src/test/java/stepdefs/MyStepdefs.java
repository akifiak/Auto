package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.HomePage;
import pages.LoginPage;
import pages.RegistrationPage;
import java.util.concurrent.TimeUnit;



public class MyStepdefs {
    HomePage homePage;
    WebDriver driver;
    LoginPage loginPage;
    RegistrationPage registrationPage;


    @Before
    public void init() {
       System.setProperty("webdriver.chrome.driver", "c://chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().window().maximize();
        homePage = new HomePage(driver);
        loginPage = new LoginPage(driver);
        registrationPage = new RegistrationPage(driver);

    }


    @Given("^user navigates o the homepage$")
    public void userNavigatesOTheHomepage() {
       driver.get("https://avionosqsdemo-developer-edition.na59.force.com/DefaultStore/ccrz__HomePage?cartId=&isCSRFlow=true&portalUser=&store=&cclcl=en_US");
        //driver.get("https://csauatfull-uat.cs14.force.com/shop");
    }

    @When("^user clicks on the login link$")
    public void userClicksOnTheLoginLink() {
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        homePage.clickLogin();
    }

    @When("^user clicks on the create account$")
    public void userClicksOnTheCreateAccount() {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        loginPage.clickReg();
    }

    @When("^user fills firstname field with \"([^\"]*)\"$")
    public void userFillsFirstnameFieldWith(String name) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    registrationPage.setName(name);
    }

    @When("^user fills lastname field with \"([^\"]*)\"$")
    public void userFillsLastnameFieldWith(String ln) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setLn(ln);
    }

    @When("^user fills primary phone with \"([^\"]*)\"$")
    public void userFillsPrimaryPhoneWith(String phone) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setPhone(phone);
    }

    @When("^user fills company name with \"([^\"]*)\"$")
    public void userFillsCompanyNameWith(String company) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setCompany(company);
    }

    @When("^user selects company type$")
    public void userSelectsCompanyType() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setCompanyType();
    }

    @When("^user fills username \"([^\"]*)\"$")
    public void userFillsUsername(String userName) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setUserName(userName);
    }

    @When("^user fills address \"([^\"]*)\"$")
    public void userFillsAddress(String billingAddress) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setBillingAddress(billingAddress);
    }
    @When("^user fills City \"([^\"]*)\"$")
    public void userFillsCity(String billingCity) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setBillingCity(billingCity);
    }

    @When("^user selects state$")
    public void userSelectsState() throws Throwable {
        registrationPage.setBillingState();
    }

    @When("^user fills postal code \"([^\"]*)\"$")
    public void userFillsPostalCode(String billingPostal) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setBillingPostal(billingPostal);
    }

    @When("^user selects country$")
    public void userSelectsCountry() throws Throwable {

    }

    @When("^user click on use billing address for shipping$")
    public void userClickOnUseBillingAddressForShipping() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setUseBilling();
    }

    @When("^click submit$")
    public void clickSubmit() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.Submitting();
    }

    @Then("^form submitted$")
    public void formSubmitted() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @After
    public void close() throws Throwable {
        driver.close();
        driver.quit();

}

}
