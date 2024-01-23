describe('Signup', () => {
    beforeEach(() => {
      // Visit the signup page before each test
      cy.visit('/signup'); // Update with your actual signup page URL
    });
  
    it('should successfully sign up with valid credentials', () => {
      // Fill in the signup form
      cy.get('[data-testid=username-input]').type('new_user');
      cy.get('[data-testid=email-input]').type('new_user@example.com');
      cy.get('[data-testid=password-input]').type('new_password');
      cy.get('[data-testid=confirm-password-input]').type('new_password');
  
      // Click the signup button
      cy.get('[data-testid=signup-button]').click();
  
      // Wait for the signup process (you may need to customize this based on your app)
      cy.url().should('include', '/dashboard'); // Update with your expected dashboard URL
  
      // Assert that the user is signed up successfully
      cy.get('[data-testid=user-greeting]').should('contain.text', 'Welcome'); // Update with an element indicating successful signup
    });
  
    it('should show an error message with invalid credentials', () => {
      // Fill in the signup form with invalid credentials
      cy.get('[data-testid=username-input]').type('new_user');
      cy.get('[data-testid=email-input]').type('invalid_email'); // Provide an invalid email to trigger an error
      cy.get('[data-testid=password-input]').type('new_password');
       
      // Click the signup button
      cy.get('[data-testid=signup-button]').click();
  
      // Assert that an error message is displayed
      cy.get('[data-testid=error-message]').should('be.visible'); // Update with your error message element
    });
  
    // Add more test cases as needed
  });
  