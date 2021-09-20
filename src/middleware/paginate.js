const Product = require("../models/Product");
function paginatedResults() {
  return async (req, res, next) => {

    const page = parseInt(req.query.page);
    const limit = 12;
    const skipIndex = (page - 1) * limit;
    const results = {};

    try {
      results.results = await Product.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: "Error Occured" });
    }
  };
}
module.exports = paginatedResults;