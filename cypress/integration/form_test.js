
describe('User App', () => {
    //fresh state!
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
})


    // Helpers to centralize selectors
    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]');
    const topping1Input = () => cy.get('input[name=topping1]');
    const topping2Input = () => cy.get('input[name=topping2]');
    const topping3Input = () => cy.get('input[name=topping3]');
    const topping4Input = () => cy.get('input[name=topping4]');
    const specialInput = () => cy.get('input[name=special]');
    const submitButton = () => cy.get('button');




    // test that you can add text to the box
    it('can type in the boxes', () => {
        nameInput()
            .should('have.value', '')
            .type('Jon')
            .should('have.value', 'Jon');
        specialInput()
            .should('have.value', '')
            .type('extra cheese please!')
            .should('have.value', 'extra cheese please!');
        })
    // test that you can select multiple toppings
    it('can user check multiple boxes?', () => {
        topping1Input().type('be.checked');
        topping1Input().type('be.unchecked');
        topping1Input().type('be.checked');
        topping2Input().type('be.checked');
        topping2Input().type('be.unchecked');
        topping2Input().type('be.checked');
        topping3Input().type('be.checked');
        topping3Input().type('be.unchecked');
        topping3Input().type('be.checked');
        topping4Input().type('be.checked');
        topping4Input().type('be.unchecked');
        topping4Input().type('be.checked');
    })

    // test that you can submit the form
    it('can see if a user can actually order the pizza', () => {
        nameInput().type('Jon');
        specialInput().type('extra cheese please!');
        topping1Input().type('be.checked');
        topping3Input().type('be.checked');
        sizeInput().select('small')
        submitButton().should('not.be.disabled');
        submitButton().click();
    })

})