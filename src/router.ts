import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
  updateProduct,
} from "./handlers/product";
import { handleInputErrors } from "./middleware";
import { asyncHandler } from "./middleware/asyncHandler";

const router = Router();

// Routing
router.get("/", getProducts);

router.get(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  asyncHandler(getProductById)
);

router.post(
  "/",
  body("name").notEmpty().withMessage("Name is required"),
  body("price")
    .isNumeric()
    .withMessage("Invalid value")
    .notEmpty()
    .withMessage("Price is required")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0"),
  handleInputErrors,
  createProduct
);

router.put(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  body("name").notEmpty().withMessage("Name is required"),
  body("price")
    .isNumeric()
    .withMessage("Invalid value")
    .notEmpty()
    .withMessage("Price is required")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0"),
  body("availability")
    .isBoolean()
    .withMessage("Availability must be a boolean"),
  handleInputErrors,
  asyncHandler(updateProduct)
);

router.patch(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  asyncHandler(updateAvailability)
);

router.delete(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  asyncHandler(deleteProduct)
);

export default router;
