package pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;


public class HomePage {
    public HomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }
////div[contains(@class,'header-login-account-container')]//a[contains(@class,'goToLogin cc_goto_login')]
////div[@class='header-login-account-container']//button[@id='login']
    @FindBy(xpath = "//div[@class='header-login-account-container']//button[@class='goToLogin cc_goto_login']")
    private WebElement login;

    @FindBy(xpath = "//a[@class='goToMyAccount' and contains(text(),'My Account')]")
    private WebElement welcomMessage;


    @FindBy(xpath = "//div[@class='sub-header-links']//li//i[1]")
    private WebElement onDemand;


    public void clickLogin() {
        login.click();
    }

    public void getMessage() {
        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(welcomMessage.getText(), "My Account");
        assertion.assertAll();
    }

    public void clickOnDemand() {
        onDemand.click();
    }


}


