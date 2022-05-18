/// <reference types="cypress" />

context("learn alert", () => {
    beforeEach(() => {
      cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    });
    it("Handling js alert - validate alert text and click ok", () => {
      cy.contains("Click for JS Alert").click();
      cy.on("window:alert", (str) => {
        expect(str).to.equal("I am a JS Alert");
      });
      cy.on("window:confirm", () => true);
      cy.get("#result").should("have.text", "You successfully clicked an alert");
    });
    it("Hanling cancel", () => {
      cy.contains("Click for JS Confirm").click();
      cy.on("window:alert", (str) => {
        expect(str).to.equal("I am a JS Confirm");
      });
      cy.on("window:confirm", () => false);
      cy.get("#result").contains("You clicked: Cancel");
    });
    it("handling prompt", () => {
      //win vanne property create
      cy.window().then(($win) => {
        // like mocking, means creating a stand-in, but a stub only mocks the behavior, but not the entire object
        //windows ko element sanga interact garna stub use
        cy.stub($win, "prompt").returns("This is good");
  
        cy.contains("Click for JS Prompt").click();
      });
      cy.get("#result").contains("You entered: This is good");
    });
  });