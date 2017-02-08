import assert from 'assert';

import Checkout from '../application/lib/Checkout';
import PricingRules from '../application/lib/Checkout/PricingRules';

// Import predefined catalog and specials
import catalog from '../application/catalog';
import specials from '../application/specials';

// Set up pricing rules
const pricingRules = new PricingRules();
pricingRules.specials = specials;

describe('Checkout', function() {
  // The main checkout object
  let checkout;
  beforeEach(function() {
    checkout = new Checkout(pricingRules);
  });

  describe('test case #1', function() {
    it('should return a total of $249.00', function() {
      checkout.scan(catalog.atv);
      checkout.scan(catalog.atv);
      checkout.scan(catalog.atv);
      checkout.scan(catalog.vga);

      assert.equal(checkout.total(), 249.00);
    });
  });

  describe('test case #2', function() {
    it('should return a total of $2718.95', function() {
      checkout.scan(catalog.atv);
      checkout.scan(catalog.ipd);
      checkout.scan(catalog.ipd);
      checkout.scan(catalog.atv);
      checkout.scan(catalog.ipd);
      checkout.scan(catalog.ipd);
      checkout.scan(catalog.ipd);

      assert.equal(checkout.total(), 2718.95);
    });
  });

  describe('test case #3', function() {
    it('should return a total of $1949.98', function() {
      checkout.scan(catalog.mbp);
      checkout.scan(catalog.vga);
      checkout.scan(catalog.ipd);

      assert.equal(checkout.total(), 1949.98);
    });
  });
});