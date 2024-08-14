
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Login from './components/Login';
//import Products from './components/Products';
import Register from './pages/Register/Register'; 
import './styles/global.css';
import CartView from './pages/carts/cartView';
import Login from './pages/Login/LoginView';
import ResetPassword from './pages/Password/resetPassword';
import CheckoutView from './pages/Products/checkout';
import ProductDetail from './pages/Products/ProductDetails';
import Products from './pages/Products/Products';
import ForgotPassword from './pages/Password/forgotPassword';
import ManagerUsers from './pages/managerUser/managerUsers';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} /> 
        <Route path="/cartView" element={<CartView />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/forgotPassword" element={<ForgotPassword />} /> 
        <Route path="/resetPassword" element={<ResetPassword />} /> 
        <Route path="/chekout" element={<CheckoutView />} />
        <Route path="/productsDetails" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/manager" element={<ManagerUsers />} />


      </Routes>
    </Router>
  );
}

export default App;