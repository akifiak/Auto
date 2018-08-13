package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
        public LoginPage(WebDriver driver) {
            PageFactory.initElements(driver, this);

    }
    @FindBy(xpath = "//input[@class='btn btn-default btn-sm register cc_register']")
    private WebElement reg;

    @FindBy(xpath="//input[@id='emailField']")
    private WebElement username;

    @FindBy(xpath="//input[@id='passwordField']")
    private WebElement password;

    @FindBy(xpath="//input[@id='send2Dsk']")
    private WebElement loginButton;


    public void clickReg() { reg.click(); }


    public void enterUN(String username) {
        this.username.sendKeys(username);
    }
        public void enterPW(String password){
            this.password.sendKeys(password);


    }
    public void clickLogin() {
    loginButton.click();
    }

}