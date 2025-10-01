// in cypress/e2e/auth.cy.ts

/// <reference types="cypress" />

describe('Sokalo Authentication Workflow', () => {

  // This block runs before each test in this file
  beforeEach(() => {
    // We visit the login page before each test
    cy.visit('http://localhost:5173/login'); 
  });

  it('should display an error for incorrect credentials', () => {
    // 1. Find the email input and type an incorrect email
    cy.get('input[id="email"]').type('wrong@email.com');

    // 2. Find the password input and type an incorrect password
    cy.get('input[id="password"]').type('wrongpassword');

    // 3. Find the submit button and click it
    cy.get('button[id="login-button"]').click();

    // 4. Assert that an error message is visible on the screen
    cy.contains('Invalid credentials').should('be.visible');
  });

  it('should allow a store owner to log in and redirect to the dashboard', () => {
    // 1. Find the email input and type a correct email
    //    (Replace with a real user from your seeded database)
    cy.get('input[id="email"]').type('StoreOwner1@sokalo.com');

    // 2. Find the password input and type the correct password
    cy.get('input[id="password"]').type('storeOwnerpass123#');

    // 3. Find the submit button and click it
    cy.get('button[id="login-button"]').click();

    // 4. Assert that the URL now includes the protected dashboard path
    cy.url().should('include', '/store-dashboard');
  });
});
