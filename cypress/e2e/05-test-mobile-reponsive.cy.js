import {
  navigateToHomePage,
  searchForValidData,
  acceptCookies,
  filterWithBrand
} from '../support/utils.js';
['iphone-8', 'macbook-15', 'ipad-mini'].forEach(viewport => {
  describe('Search Functionality Mobile Responsive test case', () => {

    let searchKeyword;
    before(function () {
      searchKeyword = 'Apple'
      cy.viewport(viewport)
      navigateToHomePage()
      acceptCookies()
    })

    it('Search with Brand Filter', () => {
      searchForValidData(searchKeyword)
      filterWithBrand()
    })
  })
})