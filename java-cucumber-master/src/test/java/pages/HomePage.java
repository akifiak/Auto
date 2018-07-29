package pages;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;


public class HomePage {

    public HomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(name = "firstName")
    private WebElement firstname;

    @FindBy(name = "lastName")
    private WebElement lastName;

    @FindBy(id = "address")
    private WebElement address;

    @FindBy(xpath = "//div[@class='radio-container col-sm-10']//label[2]")
    private WebElement gender;

    @FindBy(id = "dob")
    private WebElement dob;

    @FindBy(xpath = ("//input[@id='email']"))
    private WebElement email;

    @FindBy(xpath = ("//input[@id='password']"))
    private WebElement password;

    @FindBy(xpath = ("//input[@id='company']"))
    private WebElement company;

    @FindBy(xpath = ("//option[contains(text(),'High salary')]"))
    private WebElement salary;

    @FindBy(xpath = ("//option[contains(text(),'Good teamwork')]"))
    private WebElement goodTeamWork;

    @FindBy(xpath = ("//option[contains(text(),'Challenging')]"))
    private WebElement challenging;

    @FindBy(xpath = ("//div[@class='form-group']//div[2]/label[1]"))
    private WebElement selfDev1;

    @FindBy(xpath = ("//html//div[@class='form-group']//div[6]/label[1]"))
    private WebElement selfDev2;

    @FindBy(xpath = ("//textarea[@id='comment']"))
    private WebElement comment;

    @FindBy(xpath = ("//button[@id='submit']"))
    private WebElement submit;

    @FindBy(id = ("submit-msg"))
    private WebElement bodyText;


    public void setFirstName(String firstName) {
        this.firstname.sendKeys(firstName);
    }

    public void setLastName(String lastName) { this.lastName.sendKeys(lastName); }

    public void userGen() {
        gender.click();
    }

    public void setDOB(String dob) {this.dob.sendKeys(dob); }

    public void setAddress(String address) { this.address.sendKeys(address); }

    public void setEmail(String email) { this.email.sendKeys(email); }

    public void setPassword(String password) {
        this.password.sendKeys(password);
    }

    public void setCompany(String company) {
        this.company.sendKeys(company);
    }

    public void setSalary() {
        salary.click();
    }

    public void setExpects() {
        goodTeamWork.click();
    }

    public void setExpects2() {
        challenging.click();
    }

    public void develop() {
        selfDev1.click();
    }

    public void develop2() {
        selfDev2.click();
    }

    public void setComment(String comment) {
        this.comment.sendKeys(comment);
    }

    public void submitting() {
        submit.click();
    }

    public void ver() { Assert.assertEquals(bodyText.getText(), "Successfully submitted!"); }

}
