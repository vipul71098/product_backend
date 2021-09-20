const express = require("express");
const imageUpload = require("../middleware/upload");
const paginatedResults = require("../middleware/paginate");
const router = express.Router();
const productController = require("../controllers/productcontroller");

router.post(
  "/insertproduct",
  imageUpload.single("image"),
  productController.insertProduct
);
router.get("/page", paginatedResults(), (req, res) => {
  res.json(res.paginatedResults);
});
router.put("/updateproduct/:id", productController.UpdateProduct);
router.get("/getproduct", productController.getProduct);
router.get("/getsingleproduct/:id", productController.getSingleProduct);
router.delete("/deleteproduct/:id", productController.DeleteProduct);

module.exports = router;
