Cypress.Commands.add("Signin" , ()=>{  
cy.visit("http://automationpractice.com/index.php")
cy.get('a[class="login"]').should('be.visible').click()
cy.scrollTo(0, 250)
cy.get('input[id="email"]').type("cypresstest@gmail.com")
cy.get('input[id="passwd"]').type("cypress@123")
cy.get('button[id="SubmitLogin"]').click()
})

    Cypress.Commands.add("SignOut" , ()=>{  
        cy.get('a[class="logout"]').click()
        cy.contains("Sign out").should('not.be.visible')
        })

