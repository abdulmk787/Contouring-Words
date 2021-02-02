const router = require("express").Router();
const auth = require("../middleware/auth");
const productCtrl = require("../controllers/productCtrl");
const authAdmin = require("../middleware/authAdmin");

router
  .route("/products")
  .get(productCtrl.getProducts)
  .post(productCtrl.createProduct);

router
  .route("/products/:id")
  .delete(productCtrl.deleteProduct)
  .put(productCtrl.updateProduct);

module.exports = router;
