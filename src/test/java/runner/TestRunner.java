package runner;

import cucumber.api.CucumberOptions;
import tests.TestBase;

@CucumberOptions(features = "src/test/java/feature", glue = { "steps" }, monochrome = true, plugin = { "pretty",
		"html:target/cucumberReport" })
public class TestRunner extends TestBase {

}
