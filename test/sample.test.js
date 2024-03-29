
const createFinder = require('../src/index.js');

const cases = [
  { lat:48.857588, lng:2.295559 ,expected:"ILE-DE-FRANCE" },
  { lat:43.604248, lng:1.443397 ,expected:"OCCITANIE" },
  { lat:41.373208, lng:9.187370 ,expected:"CORSE" },
  { lat:43.272454, lng:-0.063407,expected:"NOUVELLE-AQUITAINE" },
  { lat:43.263806, lng:-0.110882,expected:"OCCITANIE" },
  { lat:48.348661, lng:-4.750652,expected:"BRETAGNE" },
  { lat:47.599252, lng:7.590921 ,expected:"GRAND EST" },
  { lat:46.149704, lng:5.983838 ,expected:null },
  { lat:42.458442, lng:1.981339 ,expected:null },
  { lat:42.432379, lng:1.943799 ,expected:"OCCITANIE" },
  { lat:43.738991, lng:7.423803 ,expected:null },
  { lat:43.786116, lng:7.528088 ,expected:"PROVENCE-ALPES-COTE D'AZUR" }
];

test('straightforward find', async () => {
  return createFinder('test/sample/france-regions-2016-contours-simplifies.shp','region')
    .then(finder => {
      cases.forEach(x => expect(finder.areaOf(x.lat, x.lng)).toBe(x.expected));
    });
});

test('quadtree find', async () => {
  return createFinder('test/sample/france-regions-2016-contours-simplifies.shp','region',true)
    .then(finder => {
      cases.forEach(x => expect(finder.areaOf(x.lat, x.lng)).toBe(x.expected));
    });
});



