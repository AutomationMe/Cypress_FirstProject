
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

 //Signin to website , Add item to cart and signout from the website
describe('My First Cypress Test', function() {
    it('Open URL and search item', function() {
   

            //resuing Command
            cy.Signin()
    cy.get('input[id="search_query_top"]').should('be.visible').type('dress')
    cy.get('button[name="submit_search"]').should('be.visible').click()
    cy.scrollTo(0, 500)
    cy.get('a[class="button ajax_add_to_cart_button btn btn-default"]').first().click()    
    cy.contains("Product successfully added to your shopping cart").should('be.visible')

    
    cy.get('span[class="cross"]').click()
            cy.SignOut()
    })   
        
})

