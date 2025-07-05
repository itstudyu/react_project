// Import Express and controller
import { Router } from "express";
import { categoryController } from "../controllers/categoryController";

// Create router
const router = Router();

// Define routes

// GET /api/categories - Get all categories
router.get("/", categoryController.getAllCategories);

// GET /api/categories/:name - Get a single category
router.get("/:name", categoryController.getCategoryByName);

// Export the router
export default router;
