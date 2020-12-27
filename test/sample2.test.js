
const createFinder = require('../src/index.js');

const cases = [
  { lat:48.857588, lng:2.295559 ,expected:"Paris" },
  { lat:43.604248, lng:1.443397 ,expected:"Haute-Garonne" },
  { lat:41.373208, lng:9.187370 ,expected:"Corse-du-Sud" },
  { lat:43.272454, lng:-0.063407,expected:"Pyrénées-Atlantiques" },
  { lat:43.263806, lng:-0.110882,expected:"Hautes-Pyrénées" },
  { lat:48.348661, lng:-4.750652,expected:"Finistère" },
  { lat:47.599252, lng:7.590921 ,expected:"Haut-Rhin" },
  { lat:46.149704, lng:5.983838 ,expected:null },
  { lat:42.458442, lng:1.981339 ,expected:null },
  { lat:42.432379, lng:1.943799 ,expected:"Pyrénées-Orientales" },
  { lat:43.738991, lng:7.423803 ,expected:null },
  { lat:43.786116, lng:7.528088 ,expected:"Alpes-Maritimes" }
];

test('straightforward find', async () => {
  return createFinder('test/sample2/departements-20140306-50m.shp','nom')
    .then(finder => {
      cases.forEach(x => expect(finder.areaOf(x.lat, x.lng)).toBe(x.expected));
    });
});

test('quadtree find', async () => {
  return createFinder('test/sample2/departements-20140306-50m.shp','nom',true)
    .then(finder => {
      cases.forEach(x => expect(finder.areaOf(x.lat, x.lng)).toBe(x.expected));
    });
});



