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
import pages.*;
import java.util.concurrent.TimeUnit;



public class MyStepdefs {
    HomePage homePage;
    WebDriver driver;
    LoginPage loginPage;
    RegistrationPage registrationPage;
    SearchPage searchPage;
    PDP pdp;
    Checkout checkoutPage;
    MyLibrary library;



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
        checkoutPage = new Checkout(driver);
        library=new MyLibrary(driver);


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

    @When("^user selects company type \"([^\"]*)\"$")
    public void userSelectsCompanyType(String compType) throws Throwable {
        Select companyType = new Select(driver.findElement(By.id("companyType")));
        companyType.selectByVisibleText(compType);
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

    @When("^user selects country \"([^\"]*)\"$")
    public void userSelectsCountry(String country) throws Throwable {
        Select countrySelector = new Select(driver.findElement(By.name("billingAddress.countryCode")));
        countrySelector.selectByVisibleText(country);
    }

    @When("^user click on use billing address for shipping$")
    public void userClickOnUseBillingAddressForShipping() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.setUseBilling();
    }

    @When("^click submit$")
    public void clickSubmit() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        registrationPage.submitting();
        Thread.sleep(8000);
    }

    @Then("^form submitted$")
    public void formSubmitted() throws Throwable {
        Thread.sleep(4000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        homePage.getMessage();

    }

    @When("^fill username \"([^\"]*)\"$")
    public void fillUsername(String username) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        loginPage.enterUN(username);
    }

    @When("^fill password \"([^\"]*)\"$")
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

    @When("^user selects preferred language as \"([^\"]*)\"$")
    public void userSelectsPreferredLanguage(String lang) throws Throwable {
        Select languageEn = new Select(driver.findElement(By.id("language")));
        languageEn.selectByVisibleText(lang);
    }

    @When("^user selects job function \"([^\"]*)\"$")
    public void userSelectsJobFunction(String job) throws Throwable {
        Select jobFunction = new Select(driver.findElement(By.id("jobFunction")));
        jobFunction.selectByVisibleText(job);
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

    @When("^user selects state \"([^\"]*)\"$")
    public void userSelectsState(String state) throws Throwable {
        Select billingState = new Select(driver.findElement(By.xpath("//select[@name='billingAddress.stateCode']")));
        billingState.selectByVisibleText(state);
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
    public void userType(String searchTerm) throws Throwable {
        Thread.sleep(6000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        searchPage.setEnterSearch(searchTerm);

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
        Thread.sleep(5000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        pdp.pdpVer();
    }
    @When("^click on cart$")
    public void clickOnCart() throws Throwable {
        Thread.sleep(9000);
        driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
        pdp.navigateCart();
        Thread.sleep(5000);
    }
    @When("^add to cart button clicked$")
    public void addToCartButtonClicked() throws Throwable {
        Thread.sleep(9000);
        driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
        pdp.setAddToCart();
    }

    @When("^click on checkout$")
    public void clickOnCheckout() throws Throwable {
        Thread.sleep(30000);
        driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
        pdp.clickCheckout();
    }
    @When("^click continue button on Contact Information$")
    public void clickContinueButtonOnContactInformation() throws Throwable {
        Thread.sleep(9000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.clickContinue();

    }
    @When("^click on shipment page a continue button$")
    public void clickOnShipmentPageAContinueButton() throws Throwable {
        Thread.sleep(9000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.continueButtonShipment();
    }

    @When("^click proceed payment$")
    public void clickProceedPayment() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.setProceedPayment();
    }
    @When("^provide payment card First Name \"([^\"]*)\"$")
    public void providePaymentCardFirstName(String cardFN) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.setCardFN(cardFN);

        }
    @When("^fill payment card Last Name \"([^\"]*)\"$")
    public void fillPaymentCardLastName(String cardLN) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.setCardLN(cardLN);
    }

    @When("^fill payment card number \"([^\"]*)\"$")
    public void fillPaymentCardNumber(String cardNum) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.setCardNum(cardNum);
    }
    @When("^select card type \"([^\"]*)\"$")
    public void selectCardType(String cardName) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        Select companyType = new Select(driver.findElement(By.name("card_type")));
        companyType.selectByVisibleText(cardName);
    }

    @When("^enter CVN code \"([^\"]*)\"$")
    public void enterCVNCode(String cvn) throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.setCVN(cvn);
    }

    @When("^click on Process Payment button$")
    public void clickOnProcessPaymentButton() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.setPaymentFinalButton();
        Thread.sleep(20000);
    }

    @When("^select card expiration month$")
    public void selectCardExpirationMonth() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        Select companyType = new Select(driver.findElement(By.name("card_expirationMM")));
        companyType.selectByVisibleText("12");

    }
    @When("^select card expiration year$")
    public void selectCardExpirationYear() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        Select companyType = new Select(driver.findElement(By.name("card_expirationYYYY")));
        companyType.selectByVisibleText("2025");

    }
    @Then("^Thank you message is displayed$")
    public void thankYouMessageIsDisplayed() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        checkoutPage.setThankYouMessage();
    }
    @When("^filter by collections$")
    public void filterByCollections() throws Throwable {
        Thread.sleep(5000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        searchPage.setFilterCollections();
    }

    @When("^user clicks on the OnDemand link$")
    public void userClicksOnTheOnDemandLink() throws Throwable {
        Thread.sleep(5000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        homePage.clickOnDemand();
    }
    @Then("^My Library button is present$")
    public void myLibraryButtonIsPresent() throws Throwable {
        library.setMyLibraryButton();
    }
    @When("^user click on the My library button$")
    public void userClickOnTheMyLibraryButton() throws Throwable {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        library.clickMyLibraryButton();
    }
    @Then("^user see documents$")
    public void userSeeDocuments() throws Throwable {
        Thread.sleep(6000);

        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        library.setMyLibDocs();
    }

    @After
    public void close() throws Throwable {
        Thread.sleep(3000);
        driver.close();
        driver.quit();

    }



}
