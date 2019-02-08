import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = "src/test/resources/features/RegistrationForm.feature",
        glue = {"stepdefs"},
        format = {"pretty",
                "json:target/cucumber.json",
                "html:target/reports-pretty/"})
public class TestRunner extends AbstractTestNGCucumberTests {
}