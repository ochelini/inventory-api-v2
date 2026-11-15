const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post(
  "/",
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),

    body("quantity")
      .isInt({ min: 0 })
      .withMessage("Quantity must be 0 or greater")
  ],
  createProduct
);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
