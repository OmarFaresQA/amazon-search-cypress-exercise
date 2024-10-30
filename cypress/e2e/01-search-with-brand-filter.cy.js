import {
  navigateToHomePage,
  searchForValidData,
  acceptCookies,
  filterWithBrand
} from '../support/utils.js';

describe('Search Functionality in E-commerce', () => {

  let searchKeyword;
  before(function () {
    searchKeyword = 'Apple'
    navigateToHomePage()
    acceptCookies()
  });

  it('Search with Brand Filter', () => {
    searchForValidData(searchKeyword)
    filterWithBrand()
  })
})