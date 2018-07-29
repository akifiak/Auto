package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage {
    public HomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//div[contains(@class,'header-login-account-container')]//a[contains(@class,'goToLogin cc_goto_login')]")
    private WebElement Login;



    public void clickLogin() { Login.click(); }



}
