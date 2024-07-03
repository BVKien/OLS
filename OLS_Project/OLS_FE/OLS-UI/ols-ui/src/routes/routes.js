// Routes config
import config from '~/config';

// Componenets
import HeaderOnly from '~/layouts/HeaderOnly';

// Pages
// Home
import HomePage from '~/pages/Home/HomePage';
import LearningPaths from '~/pages/Home/LearningPaths';
import LearningPathDetails from '~/pages/Home/LearningPathDetails';
import Search from '~/pages/Home/Search';
import UserProfile from '~/pages/Home/UserProfile';
import Settings from '~/pages/Home/Settings';
import CourseDetails from '~/pages/Home/CourseDetails';
import CourseInProgress from '~/pages/Home/CourseInProgress';
import Payment from '~/pages/Home/Payment';
import Login from '~/pages/Home/Login';
import Register from '~/pages/Home/Register';
import ForgotPassword from '~/pages/Home/ForgotPassword';
import ResetPassword from '~/pages/Home/ResetPassword';
import Blogs from '~/pages/Home/Blogs';
import BlogDetails from '~/pages/Home/BlogDetails';

// Admin
import Dashboard from '~/pages/Admin/Dashboard';
import LearningPathsManager from '~/pages/Admin/LearningPathsManager';
import ChapterManager from '~/pages/Admin/ChapterManager';
import CourseManager from '~/pages/Admin/CourseManager';
import LessonManager from '~/pages/Admin/LessonManager';
import UserManager from '~/pages/Admin/UserManager';
import BlogManager from '~/pages/Admin/BlogManager';

// Home - Public Routes: những routes công khaim ko đăng nhặp cũng xem được
// Lấy routes từ App.js -> lặp qua mảng này -> mặc định lấy Home đầu tiên -> lý do lấy được Home
const publicRoutes = [
    // Home
    { path: config.routes.home, component: HomePage },
    { path: config.routes.learningpaths, component: LearningPaths },
    { path: config.routes.learningpathdetails, component: LearningPathDetails },
    { path: config.routes.search, component: Search },
    { path: config.routes.coursedetails, component: CourseDetails },
    { path: config.routes.courseinprogress, component: CourseInProgress },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgotpassword, component: ForgotPassword },
    { path: config.routes.resetpassword, component: ResetPassword },
    { path: config.routes.blogs, component: Blogs },
    { path: config.routes.blogdetails, component: BlogDetails },

    // để mặc định -> sau xử lý login sẽ đưa nó về privateRoutes
    { path: config.routes.userprofile, component: UserProfile },
    { path: config.routes.settings, component: Settings },
    { path: config.routes.payment, component: Payment },
];

// Home - Private Routes: routes yêu cầu đăng nhập
const privateRoutes = [];

// Admin - Private Admin Routes
const privateAdminRoutes = [
    { path: config.adminRoutes.dashboard, component: Dashboard },
    { path: config.adminRoutes.usermanager, component: UserManager },
    { path: config.adminRoutes.learningpathsmanager, component: LearningPathsManager },
    { path: config.adminRoutes.chaptermanager, component: ChapterManager },
    { path: config.adminRoutes.coursemanager, component: CourseManager },
    { path: config.adminRoutes.lessonmanager, component: LessonManager },
    { path: config.adminRoutes.blogmanager, component: BlogManager },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgotpassword, component: ForgotPassword },
    { path: config.routes.resetpassword, component: ResetPassword },
];

// Export để có thể sử dụng
export { publicRoutes, privateRoutes, privateAdminRoutes };
