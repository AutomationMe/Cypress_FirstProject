class Customer
{
    SelectItem()
    {
        cy.get('a[title="Women"]').trigger('mouseover')
        cy.wait(2000)
        cy.get('a[title="Blouses"]').click({force:true})
        cy.scrollTo(0, 500)
    }
        AddtoCart()
        {

            cy.get('a[class="button ajax_add_to_cart_button btn btn-default"]').first().click()  
        }

                CloseOrder()
                {
                        cy.get('span[class="cross"]').click()
                }

}
export default Customer