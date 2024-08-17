import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Solo uno

import './styles/global.css';

import { UserProvider } from './context/UserContext';
import AppRouter from './routes/router';

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
