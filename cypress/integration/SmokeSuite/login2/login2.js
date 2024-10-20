import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User launch login url", () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});
When("User enter username {string}", (username) => {
  cy.xpath("//input[@id='username']").clear().type(username);
});
When("User enter password {string}", (password) => {
  cy.xpath("//input[@id='password']").clear().type(password);
});
When("User click login button", () => {
  cy.xpath("//button[@id='submit']").click();
});
Then("User should be logged in successfully", () => {
  cy.url().should("include", "logged-in-successfully");
});
Then("User should not be logged in successfully", () => {
  cy.url().should("not.include", "logged-in-successfully");
});
