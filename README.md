# Shopping Cart App - Building the wheel

This repository demonstrates my learning journey with React-Redux and state management. It's a shopping cart web application powered by React, Redux Toolkit, and React Router that performs basic e-commerce operations.

On a high level, I would treat Redux as a dictionary to store all the information. Unlike the traditional Context API, it provides a robust way to handle large-scale client-side and server-side data. Moreover, I am amazed by its mechanism for handling store updates. With a single line of code using `useSelector` and `useDispatch`, I don't need to handle data refresh. Updates to data automatically trigger re-renders, which simplifies the old subscribe functions.

Users can browse items from the Product List, visit individual product details, and add or remove items from the cart. All data stays synced across pages through the Redux store.


## Thinking Process

I started with the data layer. Since I wanted to use the product lists from `https://dummyjson.com/`, I first implemented an Axios instance with that base URL and configured interceptors to parse requests and responses. This gave me a clean, reusable way to fetch data across all pages.

With the data layer in place, I moved on to routing. I set up React Router to handle navigation between the Product List, Product Detail, and Cart pages, along with a 404 fallback for unknown routes.

Finally, I tackled state management with Redux. I decided on the data structure for the store — keeping cart items, total quantity, and total price together in a single slice. From there, I built out the reducer to handle add, remove, and clear operations, and created the corresponding actions and dispatchers to wire everything up.

## Key Learnings

- **State and Actions in Reducers**: State references the data, while `actions.payload` represents the data used by the actions
- **Axios Instance**: Creating an Axios instance with `instance.interceptors.response` to parse request and response data
- **Redux Provider**: Wrapping the App with `Provider` and store to enable Redux across all components

This project helped me understand how Redux simplifies state management across multiple pages and how to build interactive user interfaces with centralized data flow.

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/g7xu/SHOPPING-CART.git
cd SHOPPING-CART
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```
## File Structure

```
SHOPPING-CART/
├── .github/workflows/   # CI/CD pipeline (lint, build, deploy to GitHub Pages)
├── .husky/              # Git hooks (pre-push format check + lint)
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (product display, cart summary)
│   ├── interceptors/    # Axios instance and request/response interceptors
│   ├── pages/           # Page-level views (Cart, ProductList, ProductDetail, 404)
│   └── store/           # Redux store and slices (cart state management)
└── ...config files      # Vite, ESLint, Prettier configs
```
