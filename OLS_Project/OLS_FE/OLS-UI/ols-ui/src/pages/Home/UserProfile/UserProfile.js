// from react and libs
import React from 'react';
import classNames from 'classnames/bind';

// components
import styles from './UserProfile.scss';
import UserInfo from './components/UserInfo';
import CourseEnrolled from './components/CourseEnrolled';

const cx = classNames.bind(styles);

const UserProfile = () => {
    return (
        <main className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('user-profile__info')}>
                            <UserInfo />
                        </div>
                    </div>
                    <div className={cx('col-9')}>
                        <div className={cx('user-profile__courses-enrolled')}>
                            <CourseEnrolled />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserProfile;
