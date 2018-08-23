package pages;

        import org.openqa.selenium.Keys;
        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.WebElement;
        import org.openqa.selenium.support.FindBy;
        import org.openqa.selenium.support.PageFactory;
        import org.testng.asserts.SoftAssert;


public class SearchPage {
    public SearchPage(WebDriver driver) {
        PageFactory.initElements(driver, this);

    }
    @FindBy(xpath = "//*[@class='plp productName cc_product_name']")
    private WebElement navigateToPDP;




    @FindBy(xpath="//button[@id='doSearchCSA']")
    private WebElement hitSearch;


    @FindBy (xpath="//*[@class='plp productName cc_product_name']")
    private WebElement result;

    @FindBy(xpath = "//input[@id='searchTextCSA']")
    private WebElement enterSearch;

    @FindBy(xpath = "//div[@class='col-md-12 column column-middle cp-ltr-0']//button[@id='doSearchCSA']")
    private WebElement clickSearch;
    public void clicking(){
        navigateToPDP.click();
    }

    public void setHitSearch(){clickSearch.click();}

    public void setResult() {

        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(result.getText(), "CAN/CSA-C22.2 NO. 1010.2.041-96(R04)");
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