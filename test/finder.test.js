
const createFinder = require('../src/index.js');

test('find area', async () => {
  return createFinder('test/sample/france-regions-2016-contours-simplifies.shp')
    .then(finder => {
      expect(finder.regionOf(48.857588, 2.295559)).toBe("ILE-DE-FRANCE");
      expect(finder.regionOf(43.604248, 1.443397)).toBe("OCCITANIE");
      expect(finder.regionOf(41.373208, 9.187370)).toBe("CORSE");
      expect(finder.regionOf(43.272454, -0.063407)).toBe("NOUVELLE-AQUITAINE");
      expect(finder.regionOf(43.263806, -0.110882)).toBe("OCCITANIE");
      expect(finder.regionOf(48.348661, -4.750652)).toBe("BRETAGNE");
      expect(finder.regionOf(47.599252, 7.590921)).toBe("GRAND EST");
      expect(finder.regionOf(46.149704, 5.983838)).toBe(null);
      expect(finder.regionOf(42.458442, 1.981339)).toBe(null);
      expect(finder.regionOf(42.432379, 1.943799)).toBe("OCCITANIE");
    });
});



