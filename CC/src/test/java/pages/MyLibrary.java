package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

public class MyLibrary {
    public MyLibrary(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//button[contains(text(),'My Library')]")
    private WebElement myLibraryButton;

    @FindBy(xpath = "//body[@class='null comm-page-custom-mylibrary']/div[@id='csa']/div[@class='container']/div[@class='row']/div[@class='col-sm-12']/div[@class='csaBoday']/div[@class='row cCSAMyLibraryLayout siteforceContentArea']/div[@data-region-name='mainContent']/div[@class='ui-widget']/div[@class='col-sm-9 main-col cCSAParent cCSAMyLibrary']/div[@class='cCSAParent cCSAMyLibraryList']/div[@class='all-documents-container']/div[1]/div[1]")
    private WebElement myLibDocs;

    public void setMyLibraryButton() {
        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(myLibraryButton.getText(), "My Library");
        assertion.assertAll();
    }

    public void clickMyLibraryButton() {
        myLibraryButton.click();
    }

    public void setMyLibDocs() {
        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(myLibDocs.getText(), "Sustainability");
        assertion.assertAll();
    }
}