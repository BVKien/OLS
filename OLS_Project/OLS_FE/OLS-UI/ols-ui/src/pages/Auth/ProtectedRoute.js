import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~/pages/Auth/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { user, loading } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && user.roleName !== 'Admin') {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
