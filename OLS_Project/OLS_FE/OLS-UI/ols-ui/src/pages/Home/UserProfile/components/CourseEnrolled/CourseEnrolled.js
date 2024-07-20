// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

// components
import styles from './CourseEnrolled.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

// api
import customerApi from '~/services/apis/customerApi';
import config from '~/config';

const cx = classNames.bind(styles);

const CourseEnrolled = () => {
    // -- User --
    const [courseEnrolled, setCourseEnrolled] = useState([]);
    const currentUser = true; // Replace with actual authentication logic
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    const isCourseEnrolled = async (courseId, userId) => {
        try {
            const response = await axios.get(
                customerApi.courseEnrolled.check_course_register_by_user + '/' + courseId + '/' + userId,
            );
            return response.data; // Assuming the API returns true or false
        } catch (error) {
            console.error('Error checking course enrollment:', error.message);
            return false;
        }
    };

    // Fetch user details by userId
    useEffect(() => {
        const getAllCourseEnrolledByUserId = async () => {
            try {
                const response = await axios.get(
                    'https://localhost:7003/api/customer/course_enrolled/get_course_enrolled_of_user/' + userId,
                );

                const coursesWithEnrollmentStatus = await Promise.all(
                    response.data.map(async (course) => {
                        const isEnrolled = await isCourseEnrolled(course.courseCourseId, userId);
                        return { ...course, isEnrolled };
                    }),
                );

                setCourseEnrolled(coursesWithEnrollmentStatus);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        getAllCourseEnrolledByUserId();
    }, [userId]);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('course-enrolled__title')}>Các khóa học đã đăng ký</h1>
            {courseEnrolled.map((ce) => (
                <div className={cx('course-enrolled')}>
                    <Link
                        to={
                            courseEnrolled.isEnrolled
                                ? `${config.routes.courseinprogress}?courseId=${ce.courseCourseId}`
                                : `${config.routes.coursedetails}?courseId=${ce.courseCourseId}`
                        }
                    >
                        <div className={cx('course-enrolled__container')}>
                            <div>
                                <Image src={ce.image} className={cx('course-enrolled__image')} />
                            </div>
                            <div className={cx('course-enrolled__content')}>
                                <h2 className={cx('course-enrolled__content-name')}>{ce.courseName}</h2>
                                <p className={cx('course-enrolled__content-description')}>{ce.description}</p>
                                <br />
                                <span className={cx('course-enrolled__enrolled-date')}>
                                    Ngày đăng ký: {formatDate(ce.createdAt)}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

            {/* <h1 className={cx('blog-saved__title')}>Các bài viết đã lưu</h1>
            <div className={cx('course-enrolled')}>
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
            </div> */}
        </div>
    );
};

export default CourseEnrolled;
