// Import Express and controller
import { Router } from "express";
import { productController } from "../controllers/productController";

// Create a new router instance
// A router is like a mini-app that handles a specific set of routes
const router = Router();

// Define routes
// Each route connects an HTTP method + path to a controller function

// GET /api/products - Get all products
router.get("/", productController.getAllProducts);

// GET /api/products/featured - Get featured products
// Note: This must come before /:id to avoid conflicts
router.get("/featured", productController.getFeaturedProducts);

// GET /api/products/search - Search products
router.get("/search", productController.searchProducts);

// GET /api/products/category/:category - Get products by category
router.get("/category/:category", productController.getProductsByCategory);

// GET /api/products/:id - Get a single product
// This comes last because :id matches anything
router.get("/:id", productController.getProductById);

// Export the router
export default router;
