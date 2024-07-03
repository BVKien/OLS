// From react and libs
import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import { privateRoutes, publicRoutes, privateAdminRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { ManagerLayout } from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Viết map routes ở đây */}
                    {/* route map để lấy children cho layout */}
                    {/* Check role when login */}
                    {/* Home */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        // default layout
                        let isAdmin = false;
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

                    {/* Admin */}
                    {/* {privateAdminRoutes.map((route, index) => {
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
                    })} */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
