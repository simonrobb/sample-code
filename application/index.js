import Checkout from './lib/Checkout';
import PricingRules from './lib/Checkout/PricingRules';

import catalog from './catalog';
import specials from './specials';

// Set up pricing rules
const pricingRules = new PricingRules();
pricingRules.specials = specials;

// The main checkout object
const checkout = new Checkout(pricingRules);

// Scan items
checkout.scan(catalog.mbp);
checkout.scan(catalog.vga);
checkout.scan(catalog.ipd);
console.log(checkout.total());

checkout.clear();
checkout.scan(catalog.mbp);
console.log(checkout.total());