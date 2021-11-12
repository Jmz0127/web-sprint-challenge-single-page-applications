
describe('User App', () => {
    //fresh state!
    beforeEach(() => {
        cy.visit('http://localhost:3000');
})


    // Helpers to centralize selectors
    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('input[name=size]');
    const topping1Input = () => cy.get('input[name=topping1]');
    const topping2Input = () => cy.get('input[name=topping2]');
    const topping3Input = () => cy.get('input[name=topping3]');
    const topping4Input = () => cy.get('input[name=topping4]');
    const specialInput = () => cy.get('input[name=special]');
    const submitButton = () => cy.get('button');


    it('sanity check for some math', () => {
        // "it" is a test
        // "expect" is an assertion
        // There can be multiple (and often will be) assertions per test
        // but...they must all relate to the "one thing" we're testing!
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // === strict equality
        expect({}).to.eql({}); // == not strict equality
    })


})