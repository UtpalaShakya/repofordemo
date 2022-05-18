/// <reference types="cypress" />

export default class Loginpage {
visit(){
    //cy.visit("https://hamrobazaar.com/login");
    cy.visit(Cypress.env('url')+"/login/");
    cy.get(".PhoneInputInput").clear().type("xyz");
    cy.get("input[name=password]").clear().type("xyz");
    cy.contains("Log In").click();
}
}