
const pointInPolygon = require("@turf/boolean-point-in-polygon").default;

class Features {
  constructor(features,propname) {
    this.data = features;
    this.propname = propname;
    //console.log(this.data);
    //console.log(this.data.features[0].properties);
  }

  areaOf(lat,lng) {
    return this.findFeatureOf(this.data.features,lat,lng);
  }

  findFeatureOf(features,lat,lng) {
    var pt = [lng,lat];
    for (var i = 0; i < features.length; ++i) {
      var feature = features[i];
      var result = pointInPolygon(pt,feature.geometry);
      if(result)
        return feature.properties[this.propname];
    }
    return null;
  }
}

module.exports = Features;
