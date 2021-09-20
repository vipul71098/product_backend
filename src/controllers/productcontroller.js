
const Product = require("../models/Product");


exports.insertProduct = async (req, res) => {
  try {
    const url = req.protocol + "://" + req.get("host");
    console.log(url);
    let newProduct = new Product({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price
    });
    newProduct.image = url + "/images/" + req.file.filename;
    newProduct
      .save()
      .then(product => {
        res.json(product);
      })
      .catch(err => {
        res.status(404).json({ 'error': err });
      });
  } catch (err) {
    console.log("error ------>: " + err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    await Product.find()
      .then(product => {
        res.json(product);
      })
      .catch(err => {
        res.status(404).json({ sucess: false });
      });
  } catch (err) {
    console.log("error ------>: " + err);
  }
};

exports.UpdateProduct = async (req, res) => {
  console.log(req.params, req.body);
  try {
    await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function(err, product) {
        if (err) return res.status(500).send(err);
        res.status(200).send(product);
      }
    );
  } catch (err) {
    console.log("error ------>: " + err);
  }
};

exports.DeleteProduct = async (req, res) => {
  try {
    await Product.findById(req.params.id)
      .then(product => {
        product.remove().then(() => {
          res.json({ sucess: true });
        });
      })
      .catch(err => {
        res.status(404).json({ 'error': "Not deleted" });
      });
  } catch (err) {
    console.log("error ------>: " + err);
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    await Product.findById(req.params.id).then(product => {
      if (!product) {
        return res.status(404).send({
          message: "Blog not found with id " + req.params.id
        });
      }
      res.send(product);
    });
  } catch (err) {
    console.log("error ------>: " + error);
  }
};
