// Home
const routes = {
    // public routes
    home: '/home',
    learningpaths: '/learning-paths', // snake-case
    learningpathdetails: '/learning-path-details',
    search: '/search',
    coursedetails: '/course-details',
    courseinprogress: '/course-in-progress',
    userprofile: '/user-profile',
    settings: '/settings',
    payment: '/payment',
    login: '/',
    register: '/register',
    forgotpassword: '/forgot-password',
    resetpassword: '/reset-password',
    blogs: '/blogs',
    blogdetails: '/blog-details',

    // private routes
};

// Admin
const adminRoutes = {
    dashboard: '/admin',
    learningpathsmanager: '/admin/learning-paths-manager',
    chaptermanager: '/admin/chapter-manager',
    coursemanager: '/admin/course-manager',
    lessonmanager: '/admin/lesson-manager',
    usermanager: '/admin/user-manager',
    blogmanager: '/expert/blog-manager',
};

export { routes, adminRoutes };
