// Import necessary modules
import { Request, Response } from "express";
import { productService } from "../services/productService";
import { ApiResponse, Product } from "../types";

// ProductController handles HTTP requests related to products
// Think of this as the "receptionist" that takes requests and gives responses
export class ProductController {
  // Handle GET /api/products
  // Returns all products
  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      // Get all products from the service
      const products = productService.getAllProducts();

      // Send successful response with products
      const response: ApiResponse<Product[]> = {
        success: true,
        data: products,
      };

      res.json(response);
    } catch (error) {
      // If something goes wrong, send error response
      const response: ApiResponse<null> = {
        success: false,
        error: "Failed to fetch products",
      };

      res.status(500).json(response);
    }
  }

  // Handle GET /api/products/:id
  // Returns a single product by ID
  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      // Convert ID from string to number
      const productId = parseInt(req.params.id);

      // Check if ID is valid
      if (isNaN(productId)) {
        res.status(400).json({
          success: false,
          error: "Invalid product ID",
        });
        return;
      }

      // Get the product
      const product = productService.getProductById(productId);

      // Check if product exists
      if (!product) {
        res.status(404).json({
          success: false,
          error: "Product not found",
        });
        return;
      }

      // Send successful response
      res.json({
        success: true,
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch product",
      });
    }
  }

  // Handle GET /api/products/category/:category
  // Returns products in a specific category
  async getProductsByCategory(req: Request, res: Response): Promise<void> {
    try {
      const category = req.params.category;

      // Get products in this category
      const products = productService.getProductsByCategory(category);

      res.json({
        success: true,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch products by category",
      });
    }
  }

  // Handle GET /api/products/featured
  // Returns only featured products
  async getFeaturedProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = productService.getFeaturedProducts();

      res.json({
        success: true,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch featured products",
      });
    }
  }

  // Handle GET /api/products/search?q=searchterm
  // Search products by name or description
  async searchProducts(req: Request, res: Response): Promise<void> {
    try {
      // Get search term from query parameter
      const searchTerm = req.query.q as string;

      if (!searchTerm) {
        res.status(400).json({
          success: false,
          error: "Search term is required",
        });
        return;
      }

      const products = productService.searchProducts(searchTerm);

      res.json({
        success: true,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to search products",
      });
    }
  }
}

// Create and export instance
export const productController = new ProductController();
