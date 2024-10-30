export function navigateToHomePage() {
    cy.visit('/');
}

export function acceptCookies() {
    cy.get('body').then(($body) => {
        if ($body.find('#sp-cc-accept').length > 0) {
            cy.get('#sp-cc-accept').click()
        } else {
            cy.log(`Cookie's button is not visible`)
        }
    });
}

export function searchForValidData(searchInput) {
    cy.get('#twotabsearchtextbox').click()
        .type(searchInput + '{enter}')
}

export function filterWithBrand() {
    cy.get('#p_123-title > span').contains("Brands")
    cy.get('#p_123\\/110955 > span > a > span').click()
}

export function filterWithPriceRange() {
    cy.get('#filter-p_36 > div.a-section.a-spacing-mini.a-text-left.sf-refinement-heading > span').contains("Price")
    cy.get('#p_36\\/range-slider_slider-item_upper-bound-slider')
        .invoke('css', 'pointer-events', 'auto')
        .invoke('attr', 'min', '20')
        .invoke('attr', 'max', '100')
        .trigger('change')
    cy.contains('Go').click()
}

export function checkForSuggestions(suggestions) {
    cy.get('#nav-flyout-searchAjax > div.autocomplete-results-container > div.two-pane-results-container > div.left-pane-results-container')
        .should('exist')
        .and('be.visible')
        .find('.s-suggestion')
        .should('have.length.greaterThan', 0)
        .then(($suggestions) => {
            const foundSuggestions = [];
            $suggestions.each((index, element) => {
                foundSuggestions.push(element.innerText.trim())
            });
            suggestions.forEach((suggestion) => {
                expect(foundSuggestions).to.include(suggestion)
            });
        });
}

export function verifySearchResultsBrand(brandName) {
    cy.get('span[data-component-type="s-search-results"]')
        .should('exist') // Check that the search results container exists
        .and('be.visible') // Ensure the container is visible
        .find('h2') // Adjust the selector based on where the brand name appears (assuming it's within <h2> tags)
        .then(($results) => {
            const resultsText = $results.map((index, element) => element.innerText.trim()).get(); // Collect all results' text
            cy.log(`Search results found: ${resultsText.join(', ')}`); // Log the found results

            // Check that the brand name is present in the search results
            expect(resultsText).to.include(brandName); // Assert that the brand name is included
        });
}
