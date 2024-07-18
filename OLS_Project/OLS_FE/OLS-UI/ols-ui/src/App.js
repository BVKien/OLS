import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '~/pages/Auth/AuthContext';
import { privateRoutes, publicRoutes, privateAdminRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import ManagerLayout from '~/layouts/ManagerLayout';
import ProtectedRoute from '~/pages/Auth/ProtectedRoute';

function App() {
    const { user, loading } = useAuth();
    const isAdmin = user && user.roleName === 'Admin';

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Public Routes */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (
                            route.path === '/login' ||
                            route.path === '/register' ||
                            route.path === '/forgot-password' ||
                            route.path === '/reset-password'
                        ) {
                            Layout = (props) => <DefaultLayout useDefaultLayout={false} {...props} />;
                        } else if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {/* Private Routes */}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                        );
                    })}

                    {/* Private Admin Routes */}
                    {/* {privateAdminRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = isAdmin ? ManagerLayout : DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute adminOnly>
                                        {isAdmin ? (
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        ) : (
                                            <Navigate to="/" replace />
                                        )}
                                    </ProtectedRoute>
                                }
                            />
                        );
                    })} */}

                    {privateAdminRoutes.map((route, index) => {
                        const Page = route.component;
                        // default layout
                        let isAdmin = true;
                        let Layout;
                        if (isAdmin) {
                            Layout = ManagerLayout; // ManagerLayout
                        } else {
                            Layout = DefaultLayout; // DefaultLayout
                        }

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {/* Private Customer Routes */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                        );
                    })}

                    {/* Redirect to Home if no matching route */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
