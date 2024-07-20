import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~/pages/Auth/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { user, loading } = useAuth();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (adminOnly && user.roleName !== 'Admin' && user.roleName !== 'Expert') {
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default ProtectedRoute;
