package pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

import static org.testng.Assert.assertEquals;


public class HomePage {
    public HomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//div[contains(@class,'header-login-account-container')]//a[contains(@class,'goToLogin cc_goto_login')]")
    private WebElement Login;

    @FindBy(xpath = "//a[@class='goToMyAccount' and contains(text(),'My Account')]")
    private WebElement WelcomMessage;

    @FindBy(xpath = "//input[@id='searchTextCSA']")
    private WebElement enterSearch;

    @FindBy(xpath="//button[@id='doSearchCSA']")
    private WebElement hitSearch;

    @FindBy (xpath="//a[contains(text(),'CAN/CSA-C22.2 NO. 0-10 (R2015)')]")
    private WebElement result;


    public void clickLogin() { Login.click(); }

    public void getMessage(){
        SoftAssert assertion=new SoftAssert();
        assertion.assertEquals(WelcomMessage.getText(), "My Account");
        assertion.assertAll();
    }
    public void setEnterSearch(String enterSearch)
    {
        this.enterSearch.sendKeys(enterSearch);

    }


    public void setHitSearch(){enterSearch.sendKeys(Keys.RETURN);}

    public void setResult() {
        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(result.getText(), "CAN/CSA-C22.2 NO. 0-10 (R2015)");
        assertion.assertAll();
    }

}


