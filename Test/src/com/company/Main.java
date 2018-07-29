package com.company;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

public class Main{

    public static void main(String[] args_) {
        System.setProperty("webdriver.gecko.driver", "C:/geckodriver.exe");
        WebDriver driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.get("http://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");

        WebElement firstName = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='first-name']")));
        firstName.sendKeys("Andrii");
//testing git
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

/*
        if(driver.getPageSource().contains("Successfully submitted!"))
            System.out.println("Test Passed");
        else
            System.err.println("Text is not present in the page");
*/
        driver.close();
        driver.quit();



    }}