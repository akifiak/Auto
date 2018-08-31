package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

public class Checkout {
    @FindBy(xpath = "//input[contains(@value,'Continue')]")
    private WebElement continueButton;
    @FindBy(xpath = "//input[contains(@value,'Continue')]")
    private WebElement shipmentContinue;
    @FindBy(xpath = "//form[contains(@class,'margin_form cc_OrderReview_new')]//div[5]//input[2]")
    private WebElement proceedPayment;
    @FindBy(xpath = "//input [@class='firstName form-control']")
    private WebElement cardFN;
    @FindBy(xpath = "//input [@class='lastName form-control']")
    private WebElement cardLN;
    @FindBy(xpath = "//input [@class='cardNumber form-control']")
    private WebElement cardNumber;
    @FindBy(xpath = "//input [@class='cardCvn form-control']")
    private WebElement cvn;
    @FindBy(xpath = "//input [@id='sopccPayment']")
    private WebElement paymentFinalButton;
    @FindBy(xpath = "//h4[@class='panel-title cc_title confirmation-title']")
    private WebElement thankYouMessage;

    public Checkout(WebDriver driver) {
        PageFactory.initElements(driver, this);

    }

    public void clickContinue() {
        continueButton.click();
    }

    public void continueButtonShipment() {
        shipmentContinue.click();
    }

    public void setProceedPayment() {
        proceedPayment.click();
    }

    public void setCardFN(String CardFN) {

        this.cardFN.sendKeys(CardFN);
    }

    public void setCardLN(String CardLN) {

        this.cardLN.sendKeys(CardLN);
    }

    public void setCardNum(String CardNum) {

        this.cardNumber.sendKeys(CardNum);
    }

    public void setCVN(String cvn) {
        this.cvn.sendKeys(cvn);
    }

    public void setPaymentFinalButton() {

        paymentFinalButton.click();
    }

    public void setThankYouMessage() {
        SoftAssert assertion = new SoftAssert();
        assertion.assertEquals(thankYouMessage.getText(), "Thank you for placing your order.");
        assertion.assertAll();
    }

}
