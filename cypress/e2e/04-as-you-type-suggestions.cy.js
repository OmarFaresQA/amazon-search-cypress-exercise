import {
  navigateToHomePage,
  acceptCookies,
  checkForSuggestions
} from '../support/utils.js';

describe('Search Functionality in E-commerce', () => {

  let searchKeyword;
  before(function () {
    searchKeyword = 'Apple'
    navigateToHomePage()
    acceptCookies()
  });

  it('Search with Brand Filter', () => {
    cy.get('#twotabsearchtextbox').click()
      .type(searchKeyword)
    checkForSuggestions(['apple watch charger', 'apple pencil', 'apple airpods'])
  })
})