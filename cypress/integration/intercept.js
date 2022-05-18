/// <reference types="cypress" />

//

context("api testing", () => {
    beforeEach(() => {
      cy.visit("https://example.cypress.io/commands/network-requests");
    });
    //cy.route also can sbe used
    it("intercept get", () => {
      cy.intercept("GET", "https://jsonplaceholder.cypress.io/comments/1").as(
        "getlatestcomment"
      );
  
      cy.get(".network-btn").click();
      cy.wait("@getlatestcomment")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304]);
    });
    it("intercept post", () => {
      cy.intercept("POST", "**/comments").as("postcomments");
  
      cy.get(".network-post").click();
      cy.wait("@postcomments").should(({ request, response }) => {
        expect(request.body).to.include("email");
        expect(request.headers).to.have.property("content-type");
        expect(response && response.body).to.have.property(
          "name",
          "Using POST in cy.intercept()",
          "id",
          "500"
        );
      });
    });
    let message = "wrong message";
    it("intercept put", () => {
      cy.intercept(
        { method: "PUT", url: "**/comments/*" },
        {
          statusCode: 404,
          body: { error: message },
          headers: { "access-control-allow-origin": "*" },
          delayMs: 500,
        }
      ).as("putcomment");
  
      cy.get(".network-put").click();
      cy.wait("@putcomment");
      cy.get(".network-put-comment").should("contain", "message");
    });
  });
  