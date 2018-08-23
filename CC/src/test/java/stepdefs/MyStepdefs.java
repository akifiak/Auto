package stepdefs;


import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import pages.*;
import java.util.concurrent.TimeUnit;



public class MyStepdefs {
    HomePage homePage;
    WebDriver driver;
    LoginPage loginPage;
    RegistrationPage registrationPage;
    SearchPage searchPage;
    PDP pdp;


    @Before
    public void init() {
        System.setProperty("webdriver.chrome.driver", "c://chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().window().maximize();
        homePage = new HomePage(driver);
        loginPage = new LoginPage(driver);
        registrationPage = new RegistrationPage(driver);
        searchPage = new SearchPage(driver);
        pdp = new PDP(driver);
    }


    @Given("^user navigates to the homepage$")
    public void userNavigatesOTheHomepage() {
        // driver.get("https://avionosqsdemo-developer-edition.na59.force.com/DefaultStore/ccrz__HomePage?cartId=&isCSRFlow=true&portalUser=&store=&cclcl=en_US");
        driver.get("https://csauatfull-uat.cs14.force.com/shop");
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
        Select companyType = new Select(driver.findElement(By.id("companyType")));
        companyType.selectByVisibleText("Real Estate");
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


    @When("^user fills postal code \"([^\"]*)\"$")
    public void userFillsPostalCode(String billingPostal) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setBillingPostal(billingPostal);
    }

    @When("^user selects country$")
    public void userSelectsCountry() throws Throwable {
        Select country = new Select(driver.findElement(By.name("billingAddress.countryCode")));
        country.selectByVisibleText("Canada");
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
        Thread.sleep(8000);
    }

    @Then("^form submitted$")
    public void formSubmitted() throws Throwable {
        Thread.sleep(4000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        homePage.getMessage();

    }

    @When("^Fill username \"([^\"]*)\"$")
    public void fillUsername(String username) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        loginPage.enterUN(username);
    }

    @When("^Fill password \"([^\"]*)\"$")
    public void fillPassword(String password) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        loginPage.enterPW(password);
    }

    @When("^click submit button$")
    public void clickSubmitButton() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        loginPage.clickLogin();

    }


    @When("^hit search$")
    public void hitSearch() throws Throwable {
        Thread.sleep(3000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        searchPage.setHitSearch();
    }

    @Then("^see desired product in results$")
    public void seeResults() throws Throwable {
        Thread.sleep(3000);
        driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
        searchPage.setResult();
    }

    @When("^user selects preferred language as English$")
    public void userSelectsPreferredLanguage() throws Throwable {
        Select languageEn = new Select(driver.findElement(By.id("language")));
        languageEn.selectByVisibleText("English");
    }

    @When("^user selects job function$")
    public void userSelectsJobFunction() throws Throwable {
        Select jobFunction = new Select(driver.findElement(By.id("jobFunction")));
        jobFunction.selectByVisibleText("Manager");
    }

    @When("^user fills password \"([^\"]*)\"$")
    public void userFillsPassword(String password) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setNewPassword(password);
    }

    @When("^user fills password again \"([^\"]*)\"$")
    public void userFillsPasswordAgain(String confirmPW) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setConfirmPassword(confirmPW);
    }

    @When("^user selects state$")
    public void userSelectsState() throws Throwable {
        Select billingState = new Select(driver.findElement(By.xpath("//select[@name='billingAddress.stateCode']")));
        billingState.selectByVisibleText("Quebec");
    }

    @When("^mark terms$")
    public void markTerms() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setTerms();
    }

    @Then("^user see My Account text$")
    public void userSeeMyAccountText() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        homePage.getMessage();
    }

    @When("^mark consent$")
    public void markConsent() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setConsent();
    }

    @When("^enter username \"([^\"]*)\"$")
    public void enterUsername(String username) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        loginPage.enterUN(username);
    }

    @When("^enter password \"([^\"]*)\"$")
    public void enterPassword(String password) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        loginPage.enterPW(password);
        Thread.sleep(4000);
    }

    @When("^user type \"([^\"]*)\"$")
    public void userType(String subscription2) throws Throwable {
        Thread.sleep(6000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        searchPage.setEnterSearch(subscription2);

    }


    @When("^click link$")
    public void clickLink() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        Thread.sleep(3000);
        searchPage.clicking();
    }

    @When("^navigates to PDP$")
    public void navigatesToPDP() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        searchPage.clickName();
    }



    @Then("^add to cart button available$")
    public void addToCartButtonAvailable() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        pdp.pdpVer();
    }
    @When("^click on cart$")
    public void clickOnCart() throws Throwable {
        Thread.sleep(6000);
        driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
        pdp.navigateCart();
        Thread.sleep(5000);
    }
    @When("^add to cart button clicked$")
    public void addToCartButtonClicked() throws Throwable {
        Thread.sleep(6000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        pdp.setAddToCart();
    }

    @When("^click on checkout$")
    public void clickOnCheckout() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        pdp.clickCheckout();
    }

    @After
    public void close() throws Throwable {
        Thread.sleep(3000);
        driver.close();
        driver.quit();

    }



}
