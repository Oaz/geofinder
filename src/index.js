
const shapefile = require("shapefile");
const Features = require("./features.js");
const QuadtreeFeatures = require("./quadtree_features.js");

module.exports = (shapefilePath,propname,quad=false) => {
  return new Promise((resolve,reject) => {
    shapefile.read(shapefilePath)
      .then(result => resolve(quad ? new QuadtreeFeatures(result,propname) : new Features(result,propname)))
      .catch(error => reject(error));
  });
};
