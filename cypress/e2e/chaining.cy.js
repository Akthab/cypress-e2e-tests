it('chaining and retrying', () => {
	cy.visit('/board/1');

	// cy.contains('[data-cy=card]', 'May 15 2024');
	// cy.get('[data-cy=list]').eq(1).contains('[data-cy=card]', 'May 15 2024');

	cy.get('[data-cy=card]') //query
		.last() //query
		.should('contain.text', 'shampoo') //assertion
		.click(); //actions

	cy.get('[data-cy=card-detail-title]').should('have.value', 'shampoo');
});
