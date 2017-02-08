
export default class CatalogItemInstance {
  sku = '';
  name = '';
  price = 0;

  constructor(sku, name, price) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
}