// Import necessary modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";

// Load environment variables from .env file (if it exists)
dotenv.config();

// Create Express app
const app = express();

// Set port (use environment variable or default to 5000)
const PORT = process.env.PORT || 5000;

// Middleware
// Middleware are functions that run between receiving a request and sending a response

// Enable CORS (Cross-Origin Resource Sharing)
// This allows our frontend (on port 3000) to talk to our backend (on port 5000)
app.use(cors());

// Parse JSON bodies
// This allows us to read JSON data sent in requests
app.use(express.json());

// Logging middleware (simple request logger)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next(); // Continue to next middleware or route
});

// Routes
// Mount our route handlers at specific paths
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// Health check endpoint
// This is useful to check if the server is running
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running!",
    timestamp: new Date().toISOString(),
  });
});

// Default route for root path
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Rainforest Foods API",
    endpoints: {
      health: "/api/health",
      products: "/api/products",
      categories: "/api/categories",
    },
  });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

// Error handling middleware
// This catches any errors that occur in our routes
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Error:", err.message);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`
🚀 Server is running!
📍 Local: http://localhost:${PORT}
📍 Health check: http://localhost:${PORT}/api/health
📍 Products: http://localhost:${PORT}/api/products
📍 Categories: http://localhost:${PORT}/api/categories

Press Ctrl+C to stop the server
  `);
});
