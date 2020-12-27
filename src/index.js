
const shapefile = require("shapefile");
const Features = require("./features.js");
const QuadtreeFeatures = require("./quadtree_features.js");

module.exports = (shapefilePath,quad=false) => {
  return new Promise((resolve,reject) => {
    shapefile.read(shapefilePath)
      .then(result => resolve(quad ? new QuadtreeFeatures(result) : new Features(result)))
      .catch(error => reject(error));
  });
};
