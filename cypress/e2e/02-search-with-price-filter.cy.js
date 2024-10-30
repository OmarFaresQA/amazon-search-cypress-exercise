import {
  navigateToHomePage,
  searchForValidData,
  acceptCookies,
  filterWithPriceRange
} from '../support/utils.js';

describe('Search Functionality in E-commerce', () => {

  let searchKeyword;
  before(function () {
    searchKeyword = 'Apple'
    navigateToHomePage()
    acceptCookies()
  });

  it('Search with Price range Filter', () => {
    searchForValidData(searchKeyword)
    filterWithPriceRange()
  })
})