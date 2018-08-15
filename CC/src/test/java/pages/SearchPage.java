package pages;

        import org.openqa.selenium.Keys;
        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.WebElement;
        import org.openqa.selenium.support.FindBy;
        import org.openqa.selenium.support.PageFactory;
        import org.openqa.selenium.support.ui.Select;
        import org.testng.asserts.SoftAssert;

public class SearchPage {
    public SearchPage(WebDriver driver) {
        PageFactory.initElements(driver, this);

    }
    @FindBy(xpath = "//a[contains(text(),'CAN/CSA-C22.2 NO. 0-10 (R2015)')]")
    private WebElement navigateToPDP;

    @FindBy(xpath="//button[@id='doSearchCSA']")
    private WebElement hitSearch;

    @FindBy (xpath="//a[contains(text(),'CAN/CSA-C22.2 NO. 0-10 (R2015)')]")
    private WebElement result;

    @FindBy(xpath = "//input[@id='searchTextCSA']")
    private WebElement enterSearch;

    public void clicking(){
        navigateToPDP.click();
    }

    public void setHitSearch(){enterSearch.sendKeys(Keys.RETURN);}

    public void setResult() {
        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(result.getText(), "CAN/CSA-C22.2 NO. 0-10 (R2015)");
        assertion.assertAll();
    }

    public void clickName(){
        result.click();
    }

    public void setEnterSearch(String enterSearch)
    {
        this.enterSearch.sendKeys(enterSearch);

    }

}