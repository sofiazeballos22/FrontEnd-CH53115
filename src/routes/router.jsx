// src/routes/router.jsx
import { Route, Routes } from 'react-router-dom';  // Asegúrate de que está correctamente importado como "Routes"
import Login from '../pages/Login/LoginView';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';
import ManagerUsers from '../pages/managerUser/ManagerUsers.jsx';
import CheckoutView from '../pages/Products/checkout';
import ProductDetail from '../pages/Products/ProductDetails';
import ForgotPassword from '../pages/Password/forgotPassword';
import ResetPassword from '../pages/Password/resetPassword';
import CartView from '../pages/carts/cartView';
import TicketView from '../pages/ticket/TicketView';


function AppRouter() {
  return (
    <Routes> {/* Corregido de Routers a Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/manager" element={<ManagerUsers />} />
      <Route path="/checkout" element={<CheckoutView />} /> {/* Faltaba corregir la palabra checkout */}
      <Route path="/productDetail" element={<ProductDetail />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/user-cart" element={<CartView />} />
      <Route path="/ticket/:ticketId" element={<TicketView />} />
      <Route path="/admin/manage-users" element={<ManagerUsers />} />

    </Routes>
  );
}

export default AppRouter;
