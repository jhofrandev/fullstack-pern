import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

// Routing
router.get("/", (req, res) => {
  res.send("Welcome to the REST API!");
});

router.post("/", (req, res, next) => {
  Promise.resolve(createProduct(req, res)).catch(next);
});

router.put("/", (req, res) => {
  res.send("PUT request received!");
});

router.patch("/", (req, res) => {
  res.send("PATCH request received!");
});

router.delete("/", (req, res) => {
  res.send("DELETE request received!");
});

export default router;
