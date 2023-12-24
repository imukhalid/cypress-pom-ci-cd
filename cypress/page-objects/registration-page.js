'use strict'
class RegistrationPage {

    // Define selectors as static variables
    static firstNameInput = 'input[id="input-firstname"]';
    static lastNameInput = 'input[id="input-lastname"]';
    static emailInput = 'input[id="input-email"]';
    static phoneInput = 'input[id="input-telephone"]';
    static passwordInput = 'input[id="input-password"]';
    static confirmPasswordInput = 'input[id="input-confirm"]';
    static newsLetterRadiobutton = 'input[name="newsletter"][value="1"]';
    static privayPolicyCheckbox = 'input[name="agree"]';
    static submitButton = 'input[type="submit"]';

    // Visit page
    visit() {
        cy.visit('/index.php?route=account/register');
    }

    // First Name
    inputFirstName(userFirstName) {
        cy.get(RegistrationPage.firstNameInput).clear();
        cy.get(RegistrationPage.firstNameInput).type(userFirstName);
        return cy.get(RegistrationPage.firstNameInput);
    }

    // Last Name
    inputLastName(userLastName) {
        cy.get(RegistrationPage.lastNameInput).clear();
        cy.get(RegistrationPage.lastNameInput).type(userLastName);
        return cy.get(RegistrationPage.lastNameInput);
    }

    // Email
    inputEmail(userEmail) {
        cy.get(RegistrationPage.emailInput).clear();
        cy.get(RegistrationPage.emailInput).type(userEmail);
        return cy.get(RegistrationPage.emailInput);
    }

    // Phone
    inputPhone(userPhone) {
        cy.get(RegistrationPage.phoneInput).clear();
        cy.get(RegistrationPage.phoneInput).type(userPhone);
        return cy.get(RegistrationPage.phoneInput);
    }

    // Password
    inputPassword(userPassword) {
        cy.get(RegistrationPage.passwordInput).clear();
        cy.get(RegistrationPage.passwordInput).type(userPassword);
        return cy.get(RegistrationPage.passwordInput);
    }

    // Confirm Password
    inputConfirmPassword(userPassword) {
        cy.get(RegistrationPage.confirmPasswordInput).clear();
        cy.get(RegistrationPage.confirmPasswordInput).type(userPassword);
        return cy.get(RegistrationPage.confirmPasswordInput);
    }

    // News Letter
    newsLetter(userOption) {
        if(userOption == 'Yes'){
            cy.get(`input[name="newsletter"][value="${1}"]`).click();
        } else {
            cy.get(`input[name="newsletter"][value="${0}"]`).click();
        }

        // Check the final state of the radio button
        return cy.get(RegistrationPage.newsLetterRadiobutton)
    }

    // Privacy Policy
    privacyPolicy() {
        cy.get(RegistrationPage.privayPolicyCheckbox).check();
        return cy.get(RegistrationPage.privayPolicyCheckbox);
    }

    // Submit
    submit() {
        cy.get(RegistrationPage.submitButton).click();
    }
    
}

export default new RegistrationPage();