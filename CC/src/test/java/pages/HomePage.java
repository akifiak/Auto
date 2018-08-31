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

    @FindBy(xpath = "//div[contains(@class,'header-login-account-container')]//a[contains(@class,'goToLogin cc_goto_login')]")
    private WebElement Login;

    @FindBy(xpath = "//a[@class='goToMyAccount' and contains(text(),'My Account')]")
    private WebElement WelcomMessage;


    @FindBy(xpath = "//div[@class='sub-header-links']//li//i[1]")
    private WebElement OnDemand;


    public void clickLogin() {
        Login.click();
    }

    public void getMessage() {
        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(WelcomMessage.getText(), "My Account");
        assertion.assertAll();
    }

    public void clickOnDemand() {
        OnDemand.click();
    }


}


