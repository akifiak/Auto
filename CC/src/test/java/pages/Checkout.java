package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Checkout {
        public Checkout(WebDriver driver) {
            PageFactory.initElements(driver, this);

        }

        @FindBy(xpath ="//input[contains(@value,'Continue')]")
        private WebElement ContinueButton;

        @FindBy(xpath ="//input[contains(@value,'Continue')]")
        private WebElement ShipmentContinue;

        @FindBy (xpath="//form[contains(@class,'margin_form cc_OrderReview_new')]//div[5]//input[2]")
        private WebElement ProceedPayment;

        @FindBy (xpath = "//input [@name='storedPaymentSelection']")
        private WebElement StoredPaymentOption;

    @FindBy (xpath = "//input [@class='firstName form-control']")
    private WebElement CardFN;

    @FindBy (xpath = "//input [@class='lastName form-control']")
    private WebElement CardLN;

    @FindBy (xpath = "//input [@class='cardNumber form-control']")
    private WebElement CardNumber;

    @FindBy (xpath = "//input [@class='cardCvn form-control']")
    private WebElement CVN;

    @FindBy (xpath = "//input [@id='sopccPayment']")
    private WebElement PaymentFinalButton;




    public void clickContinue(){
            ContinueButton.click();
        }

        public void ContinueButtonShipment(){
            ShipmentContinue.click();
        }

        public void setProceedPayment() {ProceedPayment.click();}

        public void verifyStoredPayment(){
            StoredPaymentOption.click();
        }


    public void setCardFN(String CardFN){
        this.CardFN.sendKeys(CardFN);
    }

    public void setCardLN(String CardLN){
        this.CardLN.sendKeys(CardLN);
    }

    public void setCardNum(String CardNum){
        this.CardNumber.sendKeys(CardNum);
    }

    public void setCVN(String CVN){
        this.CVN.sendKeys(CVN);
    }

    public void setPaymentFinalButton(){
        PaymentFinalButton.click();
    }

}
