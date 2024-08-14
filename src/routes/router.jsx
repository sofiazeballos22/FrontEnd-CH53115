import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';
import ManagerUsers from '../pages/managerUser/managerUsers';
import CheckoutView from '../pages/Products/checkout';
import ProductDetail from '../pages/Products/ProductDetails';
import ForgotPassword from '../pages/Password/forgotPassword';
import ResetPassword from '../pages/Password/resetPassword';
import CartView from '../pages/carts/cartView';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/manager" element={<ManagerUsers />} />
        <Route path="/ckeckout" element={< CheckoutView />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/manager" element={<ManagerUsers />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
