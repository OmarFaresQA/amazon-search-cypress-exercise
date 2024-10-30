import {
  navigateToHomePage,
  searchForValidData,
  acceptCookies,
  filterWithBrand,
  filterWithPriceRange,
  verifySearchResultsBrand
} from '../support/utils.js';

describe('Search Functionality in E-commerce', () => {

  let searchKeyword
  let brand
  before(function () {
    searchKeyword = 'Apple'
    brand = 'Apple'
    navigateToHomePage()
    acceptCookies()
  });

  it('Search with multiple Filters and verify Results', () => {
    searchForValidData(searchKeyword)
    filterWithBrand()
    filterWithPriceRange()
    verifySearchResultsBrand(brand)
  })
})