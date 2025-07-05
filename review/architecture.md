# System Architecture

## Visual Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                          USER BROWSER                             │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                     REACT FRONTEND                        │    │
│  │                                                           │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │    │
│  │  │   Header    │  │  Products   │  │    Cart     │     │    │
│  │  │ Component   │  │   Page      │  │  Component  │     │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘     │    │
│  │                                                           │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │    │
│  │  │   Footer    │  │   About     │  │  Product    │     │    │
│  │  │ Component   │  │    Page     │  │   Detail    │     │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘     │    │
│  │                                                           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                               │                                   │
│                               │ HTTP Requests                     │
│                               │ (GET /api/products)               │
│                               ↓                                   │
└───────────────────────────────┼───────────────────────────────────┘
                                │
                                │ Port 5000
                                │
┌───────────────────────────────┼───────────────────────────────────┐
│                               ↓                                   │
│                        NODE.JS BACKEND                            │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    EXPRESS SERVER                         │    │
│  │                                                           │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │    │
│  │  │   Routes    │  │ Controllers │  │   Services  │     │    │
│  │  │             │→ │             │→ │             │     │    │
│  │  │ /api/       │  │  Handle     │  │  Business   │     │    │
│  │  │ products    │  │  Requests   │  │   Logic     │     │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘     │    │
│  │                                           │               │    │
│  └───────────────────────────────────────────┼───────────────┘    │
│                                             ↓                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                   DATA STORAGE (JSON)                     │    │
│  │                                                           │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │    │
│  │  │ products.   │  │ categories. │  │   users.    │     │    │
│  │  │   json      │  │    json     │  │    json     │     │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘     │    │
│  │                                                           │    │
│  └───────────────────────────────────────────────────────────┘    │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

## Component Breakdown

### Frontend (React + TypeScript)
Runs on: http://localhost:3000

**Main Components:**
- **App.tsx**: Main component that manages routing
- **Header**: Navigation bar with menu and cart
- **HomePage**: Landing page with featured products
- **ProductList**: Shows all products with filtering
- **ProductDetail**: Individual product information
- **Cart**: Shopping cart management
- **Footer**: Company information and links

**Key Libraries:**
- React Router: For navigation between pages
- Axios: For making HTTP requests to backend
- CSS Modules: For component styling

### Backend (Node.js + Express + TypeScript)
Runs on: http://localhost:5000

**Structure:**
- **server.ts**: Entry point, starts the server
- **routes/**: Defines API endpoints
- **controllers/**: Handles requests and responses
- **services/**: Business logic
- **data/**: JSON files for data storage

**API Routes:**
```
GET  /api/products          → Get all products
GET  /api/products/:id      → Get single product
GET  /api/categories        → Get all categories
GET  /api/products/category/:name → Get products by category
```

### Data Layer
**Storage**: JSON files (simple, no database needed for learning)

**Data Models:**
```typescript
Product {
  id: number
  name: string
  price: number
  category: string
  description: string
  image: string
  inStock: boolean
}

Category {
  id: number
  name: string
  displayName: string
}
```

## Request Flow Example

When a user views all products:

1. **User** clicks "Products" link
2. **React Router** navigates to /products
3. **ProductList Component** mounts
4. **useEffect Hook** triggers API call
5. **Axios** sends GET request to backend
6. **Express Router** receives request at /api/products
7. **Products Controller** handles the request
8. **Products Service** reads from products.json
9. **Response** sent back as JSON
10. **React** updates state with products
11. **Component** re-renders showing products

## Technology Choices Explained

### Why TypeScript?
- Catches errors before running code
- Better code completion in editors
- Easier to understand what data looks like

### Why React?
- Popular and lots of learning resources
- Component-based (like LEGO blocks)
- Large community for help

### Why Express?
- Simple and lightweight
- Easy to understand for beginners
- Flexible for adding features

### Why JSON instead of Database?
- No setup required
- Easy to understand and edit
- Perfect for learning
- Can upgrade to database later

## Security Considerations (Simplified)

1. **CORS**: Allows frontend to talk to backend
2. **Input Validation**: Check data before using
3. **Error Handling**: Don't expose sensitive info
4. **No Real Payments**: This is just for learning!

## Deployment Overview

For learning, we run locally:
- Frontend: npm start (port 3000)
- Backend: npm run dev (port 5000)

For real deployment, you'd use:
- Frontend: Vercel, Netlify, or GitHub Pages
- Backend: Heroku, Railway, or DigitalOcean
- Database: PostgreSQL or MongoDB 