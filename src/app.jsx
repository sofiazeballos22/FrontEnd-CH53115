
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Login from './components/Login';
//import Products from './components/Products';
import Register from './pages/Register/Register'; 
import './styles/global.css';

import { UserProvider } from './context/UserContext';  // Importa el contexto
import AppRouter from './routes/router'; // Importas el archivo que contiene las rutas



function App() {
  return (
    <UserProvider>
    <Router>
    
      <AppRouter />
    
    </Router>
    </UserProvider>
  );
}

export default App;