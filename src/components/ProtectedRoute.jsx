// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const loggedIn = localStorage.getItem("loggedIn");

  return loggedIn ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
