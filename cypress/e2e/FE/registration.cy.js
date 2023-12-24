import RegistrationPage from '../../page-objects/registration-page';
import registrationData from '../../fixtures/registrationData.json';

const {firstName, lastName, email, phone, password, confirmPassword, newsLetter} = registrationData.validUser;

describe('Registration Page', () => {
    beforeEach(() => {
        RegistrationPage.visit();
    });

    it('Verify that user is able to register with valid data', {tags: '@smoke'}, () => {
        // Fill Registration Form
        RegistrationPage.inputFirstName(firstName).should('have.value', firstName);
        RegistrationPage.inputLastName(lastName).should('have.value', lastName);
        RegistrationPage.inputEmail(email).should('have.value', email);
        RegistrationPage.inputPhone(phone).should('have.value', phone);
        RegistrationPage.inputPassword(password).should('have.value', password)
        RegistrationPage.inputConfirmPassword(confirmPassword).should('have.value', confirmPassword)
        RegistrationPage.newsLetter(newsLetter).should('be.checked');
        RegistrationPage.privacyPolicy().should('be.checked');

        // Submit
        RegistrationPage.submit();
    })

    it('Second Test', {tags: '@regression'}, () => {
        cy.log("This is regression test")
    })
})