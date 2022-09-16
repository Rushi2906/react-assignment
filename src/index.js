import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import Products from './Component/Products';
import ProductDetail from './Component/ProductDetail';
import ProductEdit from './Component/ProductEdit';
import ProductAdd from './Component/ProductAdd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
        <Route path="/product/edit/:id" element={<ProductEdit />}></Route>
        <Route path="/product/add" element={<ProductAdd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

