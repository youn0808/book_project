describe("book", () => {
  it("check the book information", () => {
    // open the page
    cy.visit("");
    // select the subjects (animals)
    cy.findByRole("link", { name: /animals/i }).click();
    // check the next button to check the pagination.
    cy.findByRole("button", { name: /next/i }).click();
    // check the prev button to check the pagination.
    cy.findByRole("button", { name: /prev/i }).click();
    // click the book(A christmas carol) in the list to see the details of the book
    cy.findByRole("link", { name: /a christmas carol/i }).click();
    // click subject details to see if it shows all the subjects
    cy.findByRole("link", { name: /subject detail/i }).click();
    // go back to the book detail to see btn is working

    cy.findByRole("button", { name: /go back/i }).click();

    // check if the clicking banner in the navbar will back to the main page.
    cy.findByRole("link", { name: /booklist/i }).click();
  });
});
