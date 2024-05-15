// it('making assertions adding cards', () => {
// 	cy.visit('/board/1');

// 	cy.get('[data-cy=new-card]').click();

// 	cy.get('[data-cy="new-card-input"]').type('bread{enter}');

// 	cy.get('[data-cy="new-card-input"]').type('milk{enter}');

// 	cy.get('[data-cy="card"]').should('have.length', 2);
// });

it('making assertions adding cards', // {defaultCommandTimeout: 4000} ,
() => {
	cy.visit('/board/1');

	// cy.get('[data-cy="card-checkbox"]').check();

	// cy.get('[data-cy="card-checkbox"]').should('be.checked');

	// cy.get('[data-cy="due-date"]').should('have.class', 'completed');

	cy.get('[data-cy="list-name"]').should('have.value', 'groceries');

	cy.get('[data-cy="card-text"]').should('have.text', 'bread');
});
