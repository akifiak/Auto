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

    public void clickReg() { reg.click(); }
}
