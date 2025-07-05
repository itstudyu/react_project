# Data Flow Documentation

## How Data Moves in Our Application

Think of data flow like ordering food at a restaurant:
- **Frontend (React)** = Customer placing order
- **Backend (Node.js)** = Kitchen preparing food
- **HTTP Requests** = Waiter carrying messages

## Simple Flow Example: Viewing Products

1. **User clicks "Products" in the browser**
   - Frontend sends a request: "Hey backend, give me all products!"
   
2. **Backend receives the request**
   - Backend thinks: "Someone wants products"
   - Looks in the data files
   - Prepares the product list
   
3. **Backend sends response**
   - Packages data as JSON (like a menu)
   - Sends it back to frontend
   
4. **Frontend displays the data**
   - Receives the product list
   - Shows it nicely on the webpage

## Main Data Flows

### 1. Getting All Products
```
User → Click "Products" → Frontend → GET /api/products → Backend
                                                            ↓
User ← See Products ← Frontend ← JSON product list ← Backend
```

### 2. Viewing One Product
```
User → Click Product → Frontend → GET /api/products/123 → Backend
                                                             ↓
User ← Product Details ← Frontend ← Single product data ← Backend
```

### 3. Shopping Cart Operations
```
Add to Cart:
User → Click "Add" → Frontend → Updates local cart state
                        ↓
                    Shows updated cart count

View Cart:
User → Click Cart → Frontend displays stored cart items
```

## API Endpoints (Communication Points)

These are like "phone numbers" the frontend uses to talk to the backend:

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get one product
- `GET /api/categories` - Get all categories
- `GET /api/products/category/:category` - Get products by category

## Data Format (JSON)

Data is sent as JSON, which looks like JavaScript objects:

```json
// Single Product Example
{
  "id": 1,
  "name": "Organic Spirulina Powder",
  "price": 15.99,
  "category": "powders",
  "description": "Nutrient-rich blue-green algae",
  "inStock": true
}

// Multiple Products Example
[
  { "id": 1, "name": "Spirulina", "price": 15.99 },
  { "id": 2, "name": "Maca Powder", "price": 12.99 }
]
```

## Frontend State Management

The frontend keeps track of:
1. **Products**: List of all products from backend
2. **Cart**: Items user wants to buy (stored locally)
3. **Current View**: Which page/product user is looking at

## For Beginners: Key Concepts

### What is an API?
- API = Application Programming Interface
- It's how frontend and backend talk to each other
- Like a restaurant menu - you order by number, get specific dish

### What is JSON?
- JSON = JavaScript Object Notation
- A way to write data that both humans and computers understand
- Like a shopping list with details

### What is HTTP?
- HTTP = How web browsers talk to servers
- GET = "Please give me data"
- POST = "Here's some data to save"

### What is State?
- State = Current situation of your app
- Like remembering what's in your shopping cart
- Changes when users do things

## Common Data Flow Patterns

1. **Load and Display**
   - Page loads → Request data → Show data
   
2. **User Interaction**
   - User clicks → Update local state → Show changes
   
3. **Filter/Search**
   - User types/selects → Filter existing data → Show filtered results

## Debugging Tips

When something doesn't work:
1. Open browser Developer Tools (F12)
2. Check Network tab - are requests being sent?
3. Check Console - any error messages?
4. Check if backend is running
5. Check if URLs match between frontend and backend 