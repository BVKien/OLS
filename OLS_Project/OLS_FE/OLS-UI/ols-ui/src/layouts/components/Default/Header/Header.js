import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faEllipsisVertical,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { UploadIcon, NotificationIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Default/Search';
import config from '~/config';

// customer api
import customerApi from '~/services/apis/customerApi';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'ev',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'learningpaths',
        to: '/learningpaths',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'longtesttesttesttest',
    },
];

const Header = () => {
    // -- User --
    const [userDetails, setUserDetails] = useState('');
    const currentUser = true; // Replace with actual authentication logic
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    // Fetch user details by userId
    useEffect(() => {
        const fetchUserDetailsByUserId = async () => {
            try {
                const responseUser = await axios.get(customerApi.user.get_user_info + '/' + userId);
                setUserDetails(responseUser.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUserDetailsByUserId();
    }, [userId]);

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Logout function called');
        localStorage.clear();
        navigate('/');
    };

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Trang cá nhân',
            to: '/user-profile',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="OLS" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Thông báo" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <NotificationIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to={config.routes.register}>
                                Register
                            </Button>

                            <Button primary to={config.routes.login}>
                                Login
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src={userDetails.image} alt={userDetails.fullName} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>

                    <button className={cx('action-btn')} onClick={() => handleLogout()}>
                        <FontAwesomeIcon icon={faSignOut} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

// import React from 'react';
// import classNames from 'classnames/bind';
// import Tippy from '@tippyjs/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link, useNavigate } from 'react-router-dom';

// import styles from './Header.module.scss';
// import images from '~/assets/images';
// import {
//     faEarthAsia,
//     faCircleQuestion,
//     faKeyboard,
//     faEllipsisVertical,
//     faGear,
//     faUser,
//     faSignOut,
// } from '@fortawesome/free-solid-svg-icons';
// import Button from '~/components/Button';
// import Menu from '~/components/Popper/Menu';
// import 'tippy.js/dist/tippy.css';
// import { UploadIcon, NotificationIcon } from '~/components/Icons';
// import Image from '~/components/Image';
// import Search from '~/layouts/components/Default/Search';
// import config from '~/config';

// const cx = classNames.bind(styles);

// const MENU_ITEMS = [
//     // {
//     //     icon: <FontAwesomeIcon icon={faEarthAsia} />,
//     //     title: 'English',
//     //     children: {
//     //         title: 'Language',
//     //         data: [
//     //             {
//     //                 type: 'language',
//     //                 code: 'ev',
//     //                 title: 'English',
//     //             },
//     //             {
//     //                 type: 'language',
//     //                 code: 'vi',
//     //                 title: 'Tiếng Việt',
//     //             },
//     //         ],
//     //     },
//     // },
//     // {
//     //     icon: <FontAwesomeIcon icon={faCircleQuestion} />,
//     //     title: 'learningpaths',
//     //     to: '/learningpaths',
//     // },
//     // {
//     //     icon: <FontAwesomeIcon icon={faKeyboard} />,
//     //     title: 'longtesttesttesttest',
//     // },
// ];

// const Header = ({ currentUser, onLogout }) => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         console.log('Logout function called');
//         localStorage.clear();
//         onLogout(); // Trigger logout action in parent component if needed
//         navigate('/login');
//     };

//     const handleMenuChange = (menuItem) => {
//         switch (menuItem.type) {
//             case 'language':
//                 break;
//             default:
//         }
//     };

//     const userMenu = [
//         {
//             icon: <FontAwesomeIcon icon={faUser} />,
//             title: 'Trang cá nhân',
//             to: '/user-profile',
//         },
//         {
//             icon: <FontAwesomeIcon icon={faGear} />,
//             title: 'Cài đặt',
//             to: '/settings',
//         },
//         {
//             icon: <FontAwesomeIcon icon={faSignOut} />,
//             title: 'Đăng xuất',
//             onClick: handleLogout,
//             separate: true,
//         },
//     ];

//     return (
//         <header className={cx('wrapper')}>
//             <div className={cx('inner')}>
//                 <Link to={config.routes.home} className={cx('logo-link')}>
//                     <img src={images.logo} alt="OLS" />
//                 </Link>

//                 <Search />

//                 <div className={cx('actions')}>
//                     {currentUser ? (
//                         <>
//                             <Tippy content="Thông báo" placement="bottom">
//                                 <button className={cx('action-btn')}>
//                                     <NotificationIcon />
//                                 </button>
//                             </Tippy>
//                         </>
//                     ) : (
//                         <>
//                             <Button text to={config.routes.register}>
//                                 Register
//                             </Button>

//                             <Button primary to={config.routes.login}>
//                                 Login
//                             </Button>
//                         </>
//                     )}

//                     <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
//                         {currentUser ? (
//                             <Image
//                                 className={cx('user-avatar')}
//                                 src="https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96"
//                                 alt="Bui Van Kien"
//                             />
//                         ) : (
//                             <button className={cx('more-btn')}>
//                                 {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
//                             </button>
//                         )}
//                     </Menu>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
