package com.company;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class Main{

    public static void main(String[] args_) throws InterruptedException {
        System.setProperty("webdriver.gecko.driver", "C:/geckodriver.exe");
        WebDriver driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");

        WebElement login = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='email']")));
        login.sendKeys("akifa@mailinator.com");

        WebElement password = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='passwd']")));
        password.sendKeys("Testing1!");

        WebElement submit = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@id='SubmitLogin']//span")));
        submit.click();


        WebElement women = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.linkText("Women")));
        women.click();

        WebElement cloth = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//img[@alt='Blouse']")));
        cloth.click();




        WebElement add = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//p[@id='add_to_cart']")));
        add.click();



        WebElement proceed = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@class='btn btn-default button button-medium']")));
        proceed.click();

        //Address verification.
        String expectedAddress = "333 W Wacker Dr";
        String acutalAddress = driver.findElement(By.xpath("//ul[@class='address first_item item box']//li//span[@class='address_address1']")).getText();

        if(acutalAddress.equals(expectedAddress)){
            System.out.println("Address is correct");
        }else{
            System.out.println("Address is wrong");
        }

        WebElement proceed2 = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@class='button btn btn-default standard-checkout button-medium']")));
        proceed2.click();



        WebElement proceed3 = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@id='center_column']/form/p/button/span")));
        proceed3.click();

        WebElement legal = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@id='uniform-cgv']")));
        legal.click();

        WebElement proceed4 = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//p[@class='cart_navigation clearfix']//button[@type='submit']//span")));
        proceed4.click();

        WebElement pay = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@class='cheque']")));
        pay.click();

        WebElement pay2 = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//p[@id='cart_navigation']//button[@type='submit']//span")));
        pay2.click();




        String expectedPrice = "$29.00";
        String acutalPrice = driver.findElement(By.xpath("//span[@class='price']")).getText();

        if(acutalPrice.equals(expectedPrice)){
            System.out.println("price is correct");
        }else{
            System.out.println("price is wrong");
        }





        if(driver.getPageSource().contains("Your order on My Store is complete."))
        {
            System.out.println("Pass");
        }
        else
        {
            System.out.println("Fail");
        }

        WebElement back = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@class='button-exclusive btn btn-default']")));
        back.click();

        List<WebElement> allTrElements = driver.findElements(By.xpath("//div[@id='center_column']"));
        for(int i= 0;i<allTrElements.size();i++){
            List<WebElement> allTdElements = allTrElements.get(i).findElements(By.tagName("td"));
            if(allTdElements.size() > 0 ) {
                System.out.println("Verified");
            }
            else{System.out.println("Failed");}
        }



        WebElement logout = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@class='logout']")));
        logout.click();

        Thread.sleep(3000);
        driver.close();
        driver.quit();



    }}