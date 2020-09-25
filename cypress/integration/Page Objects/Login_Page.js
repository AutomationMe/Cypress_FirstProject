class Login
{
   
    visit_Url()
     { 
         cy.visit("http://automationpractice.com/index.php")
     }
  
      getloginpage_link()
      {
        cy.get('a[class="login"]').should('be.visible').click()
      }
        getusername_textbox()
  
            {   
                cy.get('input[id="email"]').type("cypresstest@gmail.com")
            }
            getpassword_textbox()
  
            {
                cy.get('input[id="passwd"]').type("cypress@123")
            }
        getlogin_button()
        {
            cy.get('button[id="SubmitLogin"]').click()
        }

}

export default Login
