import React from 'react';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
const App = () => {
  // TODO: Use React Router to set up routes for ProductList, ProductDetail, and Cart components so they render correctly based on the URL path.
  return (
    <>
      <ProductList />
      <ProductDetail />
      <Cart />
    </>
  );
};

export default App;
