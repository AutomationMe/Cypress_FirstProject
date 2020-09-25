///<reference types="cypress" />

import {Login_Page} from '../Page Objects/Login_Page'

describe('My First Cypress Test', function() { 
    
    const login = new Login_Page()
    it('Open URL and login', function() {

         login.visit_url()
        


    })
})