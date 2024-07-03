// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

// components
import styles from './UserInfo.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const UserInfo = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-info')}>
                <h1 className={cx('user-info__title')}>Thông tin cá nhân</h1>
                <Image
                    src={'https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96'}
                    className={cx('user-info__avatar')}
                />
                <h1 className={cx('user-info__full-name')}>Bùi Văn Kiên</h1>
                <br />
                <div className={cx('user-info__update')}>
                    <a href="#" className={cx('user-info__update__link')}>
                        Cập nhật
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
