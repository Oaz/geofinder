

const Features = require("./features.js");
const computeBbox = require("@turf/bbox").default;
const Quadtree = require('@timohausmann/quadtree-js');

const bboxToQT = function(bbox,userdata) {
  return {
    x: bbox[0],
    y: bbox[1],
    width: bbox[2]-bbox[0],
    height: bbox[3]-bbox[1],
    data: userdata
  }
};

class QuadtreeFeatures extends Features {
  constructor(geodata) {
    super(geodata);
    this.tree = new Quadtree(bboxToQT(this.data.bbox),10,4);
    for (var i = 0; i < this.data.features.length; ++i) {
      var feature = this.data.features[i];
      var bbox = computeBbox(feature);
      //console.log(`bbox of ${feature.properties.region} is ${bbox}`);
      this.tree.insert(bboxToQT(bbox,feature));
    }
    //console.log(this.tree);
  }

  regionOf(lat,lng) {
    var candidates = this.tree.retrieve({x:lng,y:lat,width:1,height:1});
    var features = candidates.map(c => c.data);
    //console.log(`candidates for ${lat},${lng} are ${candidates.length}: ${features.map(f => f.properties.region)}`);
    return this.findFeatureOf(features,lat,lng);
  }
}

module.exports = QuadtreeFeatures;