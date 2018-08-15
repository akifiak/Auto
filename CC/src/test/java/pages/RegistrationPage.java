package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class RegistrationPage {
    public RegistrationPage(WebDriver driver) {
        PageFactory.initElements(driver, this);

    }

    @FindBy(xpath = "//input[@id='firstName']")
    private WebElement name;

    @FindBy(xpath = "//input[@id='lastName']")
    private WebElement ln;

    @FindBy(xpath = "//input[@id='primaryPhone']")
    private WebElement phone;

    @FindBy(xpath = "//input[@id='companyName']")
    private WebElement company;

    @FindBy(xpath = "//option[@value='Security']")
    private WebElement companyType;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement userName;

    @FindBy(xpath = "//input[@id='billingAddress.address1']")
    private WebElement billingAddress;

    @FindBy(xpath = "//input[@id='billingAddress.city']")
    private WebElement billingCity;

    @FindBy (xpath="//select[@name='shippingAddress.stateCode']")
    private WebElement billingState;

    @FindBy(xpath="//input[@id='billingAddress.postalCode']")
    private WebElement billingPostal;

    @FindBy(xpath="//a[@id='useBillingAddressRegistration']")
    private WebElement useBilling;

    @FindBy(xpath="//input[@id='btn-registration-submit']")
    private WebElement submit;

    @FindBy(xpath="//select[@id='language' and contains (text(),'English')]")
    private WebElement language;

    @FindBy (xpath="//input[@id='NewPassword']")
    private WebElement newPassword;

    @FindBy (xpath = "//input[@id='ConfirmPassword']")
    private WebElement confirmPassword;

    @FindBy (xpath ="//input[@id='tocFlag']")
    private WebElement terms;

    @FindBy (xpath = "//input[@id='privacyAcceptFlag']")
    private WebElement consent;


    public void setName(String name) {

        this.name.sendKeys(name);
    }

    public void setLn(String ln) {

        this.ln.sendKeys(ln);
    }

    public void setPhone(String phone) {
        this.phone.sendKeys(phone);
    }

    public void setCompany(String company) {

        this.company.sendKeys(company);
    }

    public void setCompanyType() {
        companyType.click();
    }

    public void setUserName(String userName) {

        this.userName.sendKeys(userName);
    }

    public void setBillingAddress(String billingAddress)
    {
        this.billingAddress.sendKeys(billingAddress);
    }

    public void setBillingCity(String billingCity)
    {
        this.billingCity.sendKeys(billingCity);
    }


    public void setBillingPostal(String billingPostal)
    {
        this.billingPostal.sendKeys(billingPostal);
    }
    public void setUseBilling()
    {
        useBilling.click();
    }

    public void Submitting(){
        submit.click();
    }


    public void setNewPassword(String newPassword) {

        this.newPassword.sendKeys(newPassword);
    }

    public void setConfirmPassword(String confirmPassword) {

        this.confirmPassword.sendKeys(confirmPassword);
    }

    public void setTerms(){
        terms.click();
    }

    public void setConsent(){
                consent.click();


    }

}


