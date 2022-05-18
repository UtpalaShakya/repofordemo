/// <reference types="cypress" />

// context("Interactive GUI", () => {
//   beforeEach(() => {
//     cy.visit("https://demo.guru99.com/test/newtours/");
//     cy.url().should("include", "newtours");
//   });
//   it("go to site and interact", () => {
//     cy.get("input[name=userName]")
//       .should("be.visible")
//       .should("be.enabled")
//       .clear()
//       .type("mercury");
//     cy.get("input[name=password")
//       .should("be.visible")
//       .should("be.enabled")
//       .clear()
//       .type("mercury");
//     cy.get("input[name=submit]").should("be.enabled").click();
//   });
//   it.only("enter flight details", () => {
//     cy.contains("Flights").click();
//     cy.get("input[name=tripType]").check("oneway");
//     cy.get("input[value=roundtrip]").should("not.be.checked");
//     cy.get("input[value=oneway]").should("be.checked");
//   });
// });

//   describe("checkbox", () => {
//     it.only("checkbox", () => {
//       cy.visit("http://demo.automationtesting.in/Register.html");
//       cy.get("#checkbox1")
//         .check()
//         .should("be.checked")
//         .and("have.value", "Cricket");

//       cy.get("#checkbox1").uncheck();

//       cy.get("input[type=checkbox]").check(["Cricket", "Movies"]);
//     });

//   it("skill dropdown", () => {
//     cy.get("#Skills").select("Android");
//   });

//   it("multiselect", () => {
//     cy.get("#msdd").click();
//     cy.get(".ui-corner-all").contains("Bulgarian").click();
//     cy.get(".ui-icon-close").click();
//   });

//   it.only("select country type dropdown", () => {
//     cy.get('.select2-selection').type("Japan{enter}");
//   });
// });


