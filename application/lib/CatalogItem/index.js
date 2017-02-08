import CatalogItemInstance from './CatalogItemInstance';

export default class CatalogItem {

  constructor(sku, name, price) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  createInstance() {
    return new CatalogItemInstance(this.sku, this.name, this.price);
  }
}