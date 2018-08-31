package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

public class PDP {
    public PDP(WebDriver driver) {
        PageFactory.initElements(driver, this);

    }

    @FindBy(xpath = "//button[@class='addCart-btn btn btn-default addItem btn-csa']")
    private WebElement addToCart;

    @FindBy(xpath = "//i[@class='fa fa-shopping-cart fa-lg']")
    private WebElement navCart;

    @FindBy(xpath = "//button[text()[normalize-space()= 'ADD TO CART']]")
    private WebElement add;


    @FindBy(xpath = "//button[@class='checkout-btn btn btn-default btn-csa checkOutBtn']")
    private WebElement checkout;


    public void pdpVer() {
        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(addToCart.getText(), "ADD TO CART");
        assertion.assertAll();
    }

    public void navigateCart() {
        navCart.click();
    }

    public void setAddToCart() {
        addToCart.click();
    }

    public void clickCheckout() {
        checkout.click();
    }
}