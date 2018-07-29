import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class FirstTest {

    @BeforeMethod
    public void RusBeforeAllTests(){
        System.out.println("test after each.");

    }

    @Test(priority = 9)
    public void testTrueNotEqualsToFalse(){
    //Assert.assertEquals(5,1);
        System.out.println("this is test 1");
    }
    @Test(priority=1)
    public void test2() {
        System.out.println("this is test 2");
    }

    /**Testing
     * soemting
     */
    @Test(priority=8)
        public void testingANewFunctionality() {
        System.out.println("this is test 3");
    }


@Test()
public void testingAssertion() {

    String expectedTitle = "website";
    String actualTitle = "website";
    Assert.assertEquals(actualTitle, expectedTitle, "Sorry test was WRONG");
}
@Test()
        public void FirefoxTest(){
    System.setProperty("webdriver.gecko.driver", "C:/geckodriver.exe");
    WebDriver driver = new FirefoxDriver();
    driver.manage().window().maximize();
    driver.get("http://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");
    WebElement firstName = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='first-name']")));
    firstName.sendKeys("Andrii");

    WebElement lastName = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='last-name']")));
    lastName.sendKeys("Kifiak");

    WebElement gender = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='radio-container col-sm-10']//label[2]")));
    gender.click();


    WebElement calendar = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='dob']")));
    calendar.click();


    WebElement bday = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//td[@class='day'][contains(text(),'24')]")));
    bday.click();


    WebElement address = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='address']")));
    address.click();
    address.sendKeys("333 W Wacker Dr");

    WebElement eaddress = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='email']")));
    eaddress.sendKeys("autoaktest@mailinator.com");


    WebElement password = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='password']")));
    password.sendKeys("Testing1!");

    WebElement company = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='company']")));
    company.sendKeys("Automation");

    Select role = new Select (driver.findElement(By.id("role")));
    role.selectByVisibleText("QA");

    WebElement expectations = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//option[contains(text(),'High salary')]")));
    expectations.click();

    WebElement teamwork = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//option[contains(text(),'Good teamwork')]")));
    teamwork.click();

    WebElement challenging = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//option[contains(text(),'Challenging')]")));
    challenging.click();

    WebElement develop1 = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='form-group']//div[2]/label[1]")));
    develop1.click();

    WebElement develop2 = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//html//div[@class='form-group']//div[6]/label[1]")));
    develop2.click();

    WebElement comment = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//textarea[@id='comment']")));
    comment.
            sendKeys("this is comment for homework");


    WebElement submit = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@id='submit']")));
    submit.click();

    WebElement message = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@id='submit']")));
    message.click();


    WebElement submt = (new WebDriverWait(driver, 10))
            .until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@id='submit-msg']")));

    String bodyText = driver.findElement(By.xpath("//span[@id='submit-msg']")).getText();
    Assert.assertEquals("Successfully submitted!", bodyText);
    System.out.println("successfully submitted");
    //Assert.assertEquals(5,56);
}}