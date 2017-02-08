
export default class Special {

  /**
   * Defines a special, which is used by the checkout object to
   * reduce a raw list of scanned catalog items to a new list of 
   * catalog items with the special's rule applied.
   * 
   * The transform function is applied as a callback to each item
   * in the checkout object's item list. It accepts the list of
   * items as a parameter, and should return a transformed list
   * of items.
   * 
   * @param transform (fn(array<CatalogItemInstance>) => array<CatalogItemInstance>)
   */

  constructor(transform) {
    if (transform == undefined) {
      throw new TypeError('A transform function must be provided');
    }

    this.transform = transform;
  }


  /**
   * Applies the transform function
   * 
   * @param items array<CatalogItemInstance> A list of catalog items
   * @return array<CatalogItemInstance>
   */

  pipe(items) {
    return this.transform.call(this, items);
  }
}