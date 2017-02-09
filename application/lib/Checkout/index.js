
export default class Checkout {

  items = [];

  /**
   * Creates a checkout object
   * 
   * @param pricingRules PricingRules
   */

  constructor(pricingRules) {
    this.pricingRules = pricingRules;
  }


  /**
   * Scan an item from the catalog
   * 
   * @param catalogItem CatalogItem
   */

  scan(catalogItem) {
    if (catalogItem == undefined) {
      throw new TypeError('An item parameter must be provided');
    }

    this.items.push(catalogItem.createInstance());
  }


  /**
   * Retrieve the total cost of items scanned, after pricing
   * rules have been taken into account
   * 
   * @return number
   */

  total() {
    // Make a copy of the items
    const items = JSON.parse(JSON.stringify(this.items));

    // Apply the pipe function of each special to the scanned items
    // We end up with a transformed list of scanned items
    const itemsWithSpecials = this.pricingRules.specials.reduce((prev, current) => current.pipe(prev), items);

    // Sum and return the prices of the remaining items
    return itemsWithSpecials.reduce((prev, current) => prev + current.price, 0);
  }


  /**
   * Clear the items in the checkout
   */

  clear() {
    this.items = [];
  }
}