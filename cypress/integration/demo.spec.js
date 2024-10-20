///<reference types='cypress'/>
describe("basic login case", () => {
  it("valid Login case", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.xpath("//input[@id='username']").clear().type("student");
    cy.xpath("//input[@id='password']").clear().type("Password123");
    cy.xpath("//button[@id='submit']").click();
    cy.url().should('include','logged-in-successfully')
  });
});
