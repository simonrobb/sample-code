import Special from './lib/Special';


/**
 * Return a list of Special objects.
 */

export default [
  // Make every third Apple TV free (three for the price of two)
  new Special(items => {
    const atvs = items.filter(item => (item.sku === 'atv'));
    for (let i=0; i<atvs.length; i++) {
      if (i%3 == 2) { atvs[i].price = 0; }
    }

    return items;
  }),

  // Bulk discount for iPads
  new Special(items => {
    const ipds = items.filter(item => (item.sku === 'ipd'));
    if (ipds.length >= 4) {
      ipds.forEach(ipd => ipd.price = 499.99);
    }

    return items;
  }),

  // Add a free vga adapter for every mbp
  new Special(items => {
    items.forEach(item => {
      const isMbp = (item.sku === 'mbp');

      if (isMbp) {
        // Find the first vga adapter in items which
        // isn't already free
        const vga = items.find(item => (item.sku === 'vga' && item.price > 0));
        if (vga) {
          vga.price = 0;
        }
      }
    })

    return items;
  })
];