import Login from '../Page Objects/Login_Page';
import Customer from '../Page Objects/Customer_Home';

describe('My First Cypress Test', function() {

    it('Open URL and login', function() {
        const _login = new Login();
          
            _login.visit_Url()
            _login.getloginpage_link()
            _login.getusername_textbox()
            _login.getpassword_textbox()
            _login.getlogin_button()      
            
    })
    it('Search Item and Add to cart', function() {
        const _customer = new Customer();
            
        _customer.SelectItem()
        _customer.AddtoCart()
                cy.contains("Product successfully added to your shopping cart").should('be.visible')                   
        _customer.CloseOrder()

    })
})