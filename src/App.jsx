import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename="/SHOPPING-CART">
      <Routes>
        <Route path="/" element={<Navigate to="/cart" replace />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/ProductDetail" element={<ProductDetail />}></Route>
        <Route path="/ProductList" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
