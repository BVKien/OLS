// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// components
import styles from './CoursesHaveFee.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const CoursesHaveFee = () => {
    const [courses, setCourses] = useState([]);

    // side effects
    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const isCourseEnrolled = async (courseId) => {
        try {
            const response = await axios.get(`https://localhost:7158/IsCourseEnrolled/${courseId}`);

            return response.data; // Assuming the API returns true or false
        } catch (error) {
            console.error('Error checking course enrollment:', error.message);
            return false;
        }
    };

    const fetchDataFromApi = async () => {
        try {
            const response = await axios.get('https://localhost:7158/get10CoursesWithFee');

            if (response.status !== 200) {
                throw new Error('Network is not ok.');
            }

            const coursesWithEnrollmentStatus = await Promise.all(
                response.data.map(async (course) => {
                    const isEnrolled = await isCourseEnrolled(course.courseId);
                    return { ...course, isEnrolled };
                }),
            );

            setCourses(coursesWithEnrollmentStatus);
        } catch (error) {
            console.error('Error fetching data from API:', error.message);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                <h1 className={cx('course-heading')}>Các khóa học trả phí</h1>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    {courses.map((course) => (
                        <div key={course.courseId} className={cx('col-3')}>
                            <div className={cx('course-item')}>
                                <Link
                                    to={
                                        course.isEnrolled
                                            ? `${config.routes.courseinprogress}?courseId=${course.courseId}`
                                            : `${config.routes.coursedetails}?courseId=${course.courseId}`
                                    }
                                    className={cx('course-item__link')}
                                >
                                    <Image
                                        src={course.image}
                                        alt={course.courseName}
                                        className={cx('course-item__image')}
                                    />
                                    <div className={cx('course-item__info')}>
                                        <span className={cx('course-item__learningPath')}>
                                            <Image
                                                src={course.learningPathImage}
                                                className={cx('course-item__learningPath__image')}
                                            />
                                            {course.learningPath}
                                        </span>
                                        <span className={cx('course-item__name')}>{course.courseName}</span>
                                        <div className={cx('course-item__footer')}>
                                            <span className={cx('course-item__fee')}>{course.fee} VND</span>
                                            <span className={cx('course-item__course-degree')}>
                                                Khóa học / Chứng chỉ
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row */}
                <div className={cx('row')}>
                    <div className={cx('show-more')}>
                        <Button outline small className={cx('btn-show-more')}>
                            <span className={cx('btn-show-more__title')}>Hiển thị thêm</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesHaveFee;
