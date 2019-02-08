package pages;


        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.WebElement;
        import org.openqa.selenium.support.FindBy;
        import org.openqa.selenium.support.PageFactory;
        import org.testng.asserts.SoftAssert;




public class SearchPage {
    public SearchPage(WebDriver driver) {
        PageFactory.initElements(driver, this);

    }
    @FindBy(xpath = "//*[@class='plp productName cc_product_name gp_prod']")
    private WebElement navigateToPDP;




    @FindBy(xpath="//button[@id='doSearchCSA']")
    private WebElement hitSearch;


    @FindBy (xpath="//*[@class='plp productName cc_product_name']")
    private WebElement result;

    @FindBy(xpath = "//div[@class='col-md-12 column column-middle cp-ltr-0']//input[@placeholder='Search Products']")
    private WebElement enterSearch;

    @FindBy(xpath = "//div[@class='col-md-12 column column-middle cp-ltr-0']//i[@class='fa fa-search']")
    private WebElement clickSearch;

    @FindBy(xpath="//div[@id='collapse-a1dc0000002gIHUAA2']//div[@class='panel-body cc_body']//div[3]//input[1]")
    private WebElement filterCollections;


    public void clicking(){
        navigateToPDP.click();
    }

    public void setHitSearch(){clickSearch.click();}

    public void setResult() {


        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(result.getText(), "C22.1HB-18");
        assertion.assertAll();
    }

    public void clickName(){
         result.click();
    }

    public void setEnterSearch(String enterSearch)
    {
        this.enterSearch.sendKeys(enterSearch);

    }

    public void setFilterCollections(){
        filterCollections.click();
    }

}