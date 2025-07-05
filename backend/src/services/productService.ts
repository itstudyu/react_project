// Import types and data
import { Product } from "../types";
import productsData from "../../data/products.json";

// ProductService class handles all product-related operations
// Think of this as the "brain" that knows how to work with products
export class ProductService {
  // Get all products
  // This is like asking "show me everything you have"
  getAllProducts(): Product[] {
    return productsData;
  }

  // Get a single product by ID
  // This is like asking "show me product number 5"
  getProductById(id: number): Product | undefined {
    // Find returns the first item that matches the condition
    return productsData.find((product) => product.id === id);
  }

  // Get products by category
  // This is like asking "show me all powders"
  getProductsByCategory(category: string): Product[] {
    // Filter returns all items that match the condition
    return productsData.filter((product) => product.category === category);
  }

  // Get featured products
  // This is like asking "show me your best products"
  getFeaturedProducts(): Product[] {
    // Filter only products where featured is true
    return productsData.filter((product) => product.featured === true);
  }

  // Search products by name
  // This is like asking "do you have anything with 'maca' in the name?"
  searchProducts(searchTerm: string): Product[] {
    // Convert search term to lowercase for case-insensitive search
    const term = searchTerm.toLowerCase();

    // Filter products where name or description contains the search term
    return productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
    );
  }

  // Get products that are in stock
  getInStockProducts(): Product[] {
    return productsData.filter((product) => product.inStock === true);
  }
}

// Create and export a single instance of the service
// This ensures we use the same instance throughout our app
export const productService = new ProductService();
