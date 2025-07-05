// Import necessary modules
import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";
import { ApiResponse, Category } from "../types";

// CategoryController handles HTTP requests related to categories
export class CategoryController {
  // Handle GET /api/categories
  // Returns all categories
  async getAllCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = categoryService.getAllCategories();

      const response: ApiResponse<Category[]> = {
        success: true,
        data: categories,
      };

      res.json(response);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch categories",
      });
    }
  }

  // Handle GET /api/categories/:name
  // Returns a single category by name
  async getCategoryByName(req: Request, res: Response): Promise<void> {
    try {
      const categoryName = req.params.name;
      const category = categoryService.getCategoryByName(categoryName);

      if (!category) {
        res.status(404).json({
          success: false,
          error: "Category not found",
        });
        return;
      }

      res.json({
        success: true,
        data: category,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch category",
      });
    }
  }
}

// Create and export instance
export const categoryController = new CategoryController();
