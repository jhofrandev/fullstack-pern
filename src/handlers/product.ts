import { Request, Response } from "express";
import Product from "../models/Product.model";
import { check, validationResult } from "express-validator";

export const createProduct = async (req: Request, res: Response) => {
  await check("name").notEmpty().withMessage("Name is required").run(req);
  await check("price")
    .isNumeric()
    .withMessage("Invalid value")
    .notEmpty()
    .withMessage("Price is required")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0")
    .run(req);

  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const product = await Product.create(req.body);
  res.json({ data: product });
};
