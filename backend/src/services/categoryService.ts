// Import types and data
import { Category } from "../types";
import categoriesData from "../../data/categories.json";

// CategoryService class handles all category-related operations
export class CategoryService {
  // Get all categories
  getAllCategories(): Category[] {
    return categoriesData;
  }

  // Get a single category by name
  // Example: getCategoryByName('powders')
  getCategoryByName(name: string): Category | undefined {
    return categoriesData.find((category) => category.name === name);
  }

  // Get a category by ID
  getCategoryById(id: number): Category | undefined {
    return categoriesData.find((category) => category.id === id);
  }

  // Check if a category exists
  categoryExists(name: string): boolean {
    return categoriesData.some((category) => category.name === name);
  }
}

// Create and export a single instance
export const categoryService = new CategoryService();
