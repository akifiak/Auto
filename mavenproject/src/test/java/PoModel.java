import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PoModel {
    WebDriver driver;

    public PoModel(WebDriver driver){
        driver=this.driver;

    }
    public void setFirstName(String name){
        WebElement firstNameInput = driver.findElement(By.xpath(""));
                firstNameInput.sendKeys(name);

    }
}
