it('creates a list and new card', () => {
	cy.visit('/board/1');

	// cy.contains('.board', 'first board');

	// select element using id, class, attribute
	// cy.get('.board');
	// cy.get('#board-1');
	// cy.get('[data-cy=board-item]').first();

	cy.get('[data-cy="add-list-input"]').type('new list{enter}');

	cy.contains('Add another card').click();

	cy.get('[data-cy="new-card-input"]').type('new card{enter}');
});

it.only('new test', () => {
	cy.visit('/');

	cy.get('[data-cy="star"]').first().click({ force: true });
});
