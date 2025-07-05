// Type definition for a Product
// This tells TypeScript what a product object should look like
export interface Product {
  id: number; // Unique identifier
  name: string; // Product name
  price: number; // Price in dollars
  category: string; // Category name (e.g., "powders")
  description: string; // Product description
  image: string; // Path to product image
  inStock: boolean; // Whether product is available
  featured?: boolean; // Optional: is this a featured product?
}

// Type definition for a Category
export interface Category {
  id: number; // Unique identifier
  name: string; // URL-friendly name (e.g., "powders")
  displayName: string; // User-friendly name (e.g., "Superfood Powders")
  description: string; // Category description
}

// Type for cart items (extends Product with quantity)
export interface CartItem extends Product {
  quantity: number; // How many of this item in cart
}

// API Response types
// These help ensure our API responses are consistent
export interface ApiResponse<T> {
  success: boolean; // Did the request succeed?
  data?: T; // The actual data (optional)
  error?: string; // Error message (optional)
}
