# Rainforest Foods Clone - Project Overview

## What is this project?

This is a simplified e-commerce website inspired by Rainforest Foods, built to help you learn web development. The website sells organic superfoods and includes basic shopping functionality.

## Technology Stack

### Frontend (What users see)
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: JavaScript with type safety (helps catch errors)
- **CSS**: For styling and making the website look good

### Backend (Server that handles data)
- **Node.js**: JavaScript runtime for the server
- **Express**: Web framework for Node.js
- **TypeScript**: For type-safe server code
- **JSON**: Simple data storage (no database for simplicity)

## Main Features

1. **Homepage**: Shows featured products and categories
2. **Product Listing**: Browse all available products
3. **Product Details**: View individual product information
4. **Shopping Cart**: Add/remove items, view total
5. **Categories**: Filter products by type (e.g., Powders, Seeds)
6. **About Page**: Information about the company

## Project Structure

```
render_project/
├── backend/            # Server-side code
│   ├── src/           # Source code
│   ├── data/          # JSON data files
│   └── package.json   # Backend dependencies
├── frontend/          # Client-side code
│   ├── src/           # React components
│   ├── public/        # Static files
│   └── package.json   # Frontend dependencies
└── review/            # Documentation
    ├── project-overview.md     # This file
    ├── data-flow.md           # How data moves
    ├── architecture.md        # System design
    └── code-explanations/     # Code explanations
```

## How to Run the Project

### Prerequisites
1. Install Node.js from https://nodejs.org/
2. Install a code editor (VS Code recommended)

### Running the Backend
```bash
cd backend
npm install  # Install dependencies
npm run dev  # Start the server
```

### Running the Frontend
```bash
cd frontend
npm install  # Install dependencies
npm start    # Start React app
```

## For Beginners

- **Don't worry about understanding everything at once!**
- Start by running the project and seeing it work
- Then explore one file at a time
- The code has many comments to help you learn
- Each part is explained in the code-explanations folder

## Next Steps After Setup

1. Browse the working website
2. Read the code explanations
3. Try making small changes (like changing text or colors)
4. Gradually understand how frontend and backend communicate
5. Add your own features as you learn! 