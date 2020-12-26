
var shapefile = require("shapefile");
var pointInPolygon = require("@turf/boolean-point-in-polygon").default;

class Finder {
  constructor(geodata) {
    this.data = geodata;
  }

  regionOf(lat,lng) {
    var pt = [lng,lat];
    for (var i = 0; i < this.data.features.length; ++i) {
      var feature = this.data.features[i];
      var result = pointInPolygon(pt,feature.geometry);
      if(result)
        return feature.properties.region;
    }
    return null;
  }
}

module.exports = (shapefilePath) => {
  return new Promise((resolve,reject) => {
    shapefile.read(shapefilePath)
      .then(result => resolve(new Finder(result)))
      .catch(error => reject(error));
  });
};
