import React from 'react';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Cart />}></Route>
      <Route path='/ProductDetail' element = {<ProductDetail/>}></Route>
      <Route path='/ProductList' element = {<ProductList/>}></Route>
      <Route path='*' element = {<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
  )

};

export default App;
