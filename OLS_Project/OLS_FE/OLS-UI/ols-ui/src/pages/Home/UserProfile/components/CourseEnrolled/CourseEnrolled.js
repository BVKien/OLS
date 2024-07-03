// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

// components
import styles from './CourseEnrolled.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const CourseEnrolled = () => {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('course-enrolled__title')}>Các khóa học đã đăng ký</h1>
            <div className={cx('course-enrolled')}>
                <Button outline small className={cx('add-more-courses-btn')}>
                    + Thêm khóa học
                </Button>
                <div className={cx('course-enrolled__container')}>
                    <div>
                        <Image src={'https://s.net.vn/MPOH'} className={cx('course-enrolled__image')} />
                    </div>
                    <div className={cx('course-enrolled__content')}>
                        <h2 className={cx('course-enrolled__content-name')}>Javascript cơ bản</h2>
                        <p className={cx('course-enrolled__content-description')}>Mô tả khóa học</p>
                        <a href="#" className={cx('course-enrolled__content-view-certificates-link')}>
                            Xem chứng chỉ
                        </a>
                        <br />
                        <span className={cx('course-enrolled__enrolled-date')}>Ngày đăng ký: 29/12/2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseEnrolled;
