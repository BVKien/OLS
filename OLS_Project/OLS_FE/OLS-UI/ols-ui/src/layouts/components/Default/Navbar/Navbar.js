// libs
import React from 'react';
import classNames from 'classnames/bind';
import config from '~/config';

// layouts
import styles from './Navbar.module.scss';
import Menu, { MenuItem } from './Menu';
// đọc sang phần comment của icon bên menuitem -> lý do k thể trực tiếp đưa vào icon được
// vì homeicon hiện tại đang là component của bảng(chưa hiểu rõ)
import { HomeIcon, LearningPathsIcon, NotificationIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Navbar = () => {
    return (
        <nav className={cx('wrapper')}>
            <Menu>
                {/* <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<NotificationIcon />} /> */}
                {/* <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} /> */}
                <MenuItem title="Trang chủ" to={config.routes.home} />
                {/* <MenuItem
                    title="Learning paths"
                    to={config.routes.learningpaths}
                    icon={<LearningPathsIcon />}
                    activeIcon={<SearchIcon />} */}
                {/* <MenuItem title="Learning paths" to={config.routes.learningpaths} icon={<LearningPathsIcon />} /> */}
                <MenuItem title="Các lộ trình" to={config.routes.learningpaths} />
                {/* Test */}
                {/* <MenuItem title="User profile" to={config.routes.userprofile} /> */}
            </Menu>
        </nav>
    );
};

export default Navbar;

// React.createElement... - javascript
