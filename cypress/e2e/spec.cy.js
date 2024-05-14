it('my first test', () => {
	cy.visit('/');

	cy.contains('.board', 'first board');

	// select element using id, class, attribute
	cy.get('.board');
	cy.get('#board-1');
	cy.get('[data-cy=board-item]').first();
});
