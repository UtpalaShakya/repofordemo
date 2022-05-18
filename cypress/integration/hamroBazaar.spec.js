/// <reference types="cypress" />

import LoginPage from "./PageObject/LoginPage";


//use clock {timestamp}

it('using clock', () => {
  const date = new Date(2022, 5, 5).getTime() //return a timestamp
  cy.clock(date)
  cy.log(date)
})
it("hamrobazaar login", () => {
    
    //test location pathname
    cy.visit("https://hamrobazaar.com/login");
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/login");
    });
    
    //using support>command called login
    cy.login("9841546562", "UtpalaShakya");
  
    //PageObject for login
    const lp = new LoginPage();
    lp.visit();

    //direct login from integration
    cy.visit("https://hamrobazaar.com/login");
    cy.get(".PhoneInputInput").clear().type("9841546562");
    cy.get("input[name=password]").clear().type("UtpalaShakya");
    cy.contains("Log In").click();
});

it("assertion for url", () => {
    const lp = new LoginPage();
    lp.visit();
    cy.url().should("include", "hamrobazaar");
    cy.title().should(
      "be.equal",
      "Hamrobazar - Nepal's Online Classified Marketplace for Shopping"
    );
    cy.location("protocol").should("eq", "https:");
  });

it("search item", () => {
    const lp = new LoginPage();
    lp.visit();
    cy.get('.desk > .search-form > form > .form-item > input')
      .should("be.enabled")
      .should("be.visible")
      .type("mobile{enter}");
    cy.get(".desk > .search-form > form > .form-item > input").should(
      "have.value",
      "mobile")


    //radio button
    cy.contains('Add Filter').click()
    cy.get(".sticky--part > .filter--box > .filter--form > form > :nth-child(2) > .input")
      .should("be.visible")
      .select("Brand New");
    cy.get(".form-item--filterBtn > :nth-child(1)").click();
  });


  describe("intercept", () => {
    it("intercept get", () => {
      cy.intercept("GET", "https://hamrobazaar.com/").as("selectOption");
      cy.visit("https://hamrobazaar.com/");
      cy.get(
        ".Wcat > .vh--part > :nth-child(2) > .cat__item > .cat__item--main"
      ).click();
  
      //cy.wait("@selectOption").its("response.statusCode").should("eq", 200);
      cy.wait("@selectOption").then(function (xhr) {
        expect(xhr.response.statusCode).to.eq(200);
        expect(xhr.response.body.content).to.eq(
          "Hamrobazar.com is Nepal's No. 1 Marketplace which enables to list wide variety of new or used product online. We at hamrobazar.com believe that Internet is a great promotional vehicle as well as communication channel for connecting buyers and sellers. Hamrobazar.com is perfect solution which helps to list your products and find great deals."
        );

});
});
 });
  





  